/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { jsx } from '@emotion/core';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';
import {
  MapBoxMap,
  Header,
  Footer,
  Features,
  center,
  left,
  right,
  light,
  dark,
  Step,
  // Sidebar,
} from './styles';

const layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
};

const alignments = {
  left,
  center,
  right,
};

const themes = {
  light,
  dark,
};

const transformRequest = url => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery
    ? '&pluginName=journalismScrollytelling'
    : '?pluginName=journalismScrollytelling';
  return {
    url: url + suffix,
  };
};

const App = config => {
  const [{ currentChapter }, setCurrentChapter] = useState({
    currentChapter: config.chapters[0].location,
  });
  const mapContainer = useRef();
  const theme = config.theme;
  const currentChapterID = currentChapter.id;

  useEffect(() => {
    if (mapContainer?.current) {
      const mapStart = config.chapters[0].location;

      mapboxgl.accessToken = config.accessToken;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: config.style,
        center: mapStart.center,
        zoom: mapStart.zoom,
        pitch: mapStart.pitch,
        bearing: mapStart.bearing,
        transformRequest,
      });

      const marker = new mapboxgl.Marker();
      if (config.showMarkers) {
        marker.setLngLat(mapStart.center).addTo(map);
      }

      const getLayerPaintType = layer => {
        const layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
      };

      const setLayerOpacity = layer => {
        const paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(prop => {
          map.setPaintProperty(layer.layer, prop, layer.opacity);
        });
      };

      const scroller = scrollama();

      map.on('load', function () {
        const layers = map.getStyle().layers;

        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
          }
        }
        map.addLayer(
          {
            id: '3d-buildings',
            source: 'composite',
            'source-layer': 'building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 15,
            paint: {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height'],
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height'],
              ],
              'fill-extrusion-opacity': 0.6,
            },
          },
          labelLayerId,
        );

        scroller
          .setup({
            step: '.step',
            offset: 0.5,
            progress: true,
          })
          .onStepEnter(response => {
            const chapter = config.chapters.find(
              chap => chap.id === response.element.id,
            );
            setCurrentChapter({ currentChapter: chapter });
            map.flyTo(chapter.location);
            if (config.showMarkers) {
              marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
              chapter.onChapterEnter.forEach(setLayerOpacity);
            }
          })
          .onStepExit(response => {
            var chapter = config.chapters.find(
              chap => chap.id === response.element.id,
            );
            if (chapter.onChapterExit.length > 0) {
              chapter.onChapterExit.forEach(setLayerOpacity);
            }
          });
      });

      window.addEventListener('resize', scroller.resize);
      return () => window.removeEventListener('resize', scroller.resize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MapBoxMap ref={mapContainer} />
      {config && (
        <div id="story">
          {config?.title && (
            <Header css={themes[theme]}>
              <h1>{config.title}</h1>
              {config.subtitle && <h2>{config.subtitle}</h2>}
              {config.byline && <p>{config.byline}</p>}
            </Header>
          )}
          <Features css={alignments[config.alignment]}>
            {config.chapters.map(chapter => (
              <Chapter
                key={chapter.id}
                theme={theme}
                {...chapter}
                currentChapterID={currentChapterID}
              />
            ))}
          </Features>
          {/* <Sidebar css={themes[theme]}>
            Restaurants
          </Sidebar> */}
          {config.footer && (
            <Footer css={themes[theme]}>
              <p>{config.footer}</p>
            </Footer>
          )}
        </div>
      )}
    </main>
  );
};

const Chapter = ({
  id,
  theme,
  title,
  image,
  description,
  currentChapterID,
}) => {
  const classList = id === currentChapterID ? 'active' : 'step';
  return (
    <Step id={id} className={classList}>
      <div css={themes[theme]}>
        {title && <h3>{title}</h3>}
        {image && <img src={image} alt={title}></img>}
        {description && <p>{description}</p>}
      </div>
    </Step>
  );
};

export default App;
