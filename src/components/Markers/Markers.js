/** @jsx jsx */
import { useEffect } from 'react';
import '../../styles/app.css';
import { jsx } from '@emotion/core';
import mapboxgl from 'mapbox-gl';

import { restConfig } from '../../mapbox/restConfig';

const Markers = ({ map, currentChapterID, showMarkers }) => {
  const renderConfig = restConfig[currentChapterID];

  const flyToStore = currentFeature => {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  };

  const createPopUp = currentFeature => {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        '<h3>Sweetgreen</h3>' +
          '<h4>' +
          currentFeature.properties.address +
          '</h4>',
      )
      .addTo(map);
  };

  const handleClick = id => {
    const clickedListing = renderConfig.features.filter(
      feature => id === feature.properties.id,
    )[0];
    flyToStore(clickedListing);
    createPopUp(clickedListing);
  };

  const markerPlacement = element => {
    if (map && element && showMarkers) {
      const marker = new mapboxgl.Marker(element, { offset: [0, -23] });
      if (element.dataset?.lng && element.dataset?.lat) {
        marker
          .setLngLat(
            [Number(element.dataset.lng)].concat([Number(element.dataset.lat)]),
          )
          .addTo(map);
      }
    }
  };
  useEffect(() => {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    const markers = document.getElementsByClassName('marker');
    // debugger;
    if (!showMarkers && markers) {
      for (let i = 0; i < markers.length; i++) {
        markers[i].remove();
      }
    }
  }, [showMarkers]);
  return (
    <div>
      {renderConfig &&
        renderConfig.features.map((feature, idx) => {
          const id = feature.properties.id;
          return (
            <div
              ref={markerPlacement}
              data-lng={feature.geometry.coordinates[0]}
              data-lat={feature.geometry.coordinates[1]}
              key={idx}
              id={`marker-${id}`}
              className="marker"
              onClick={() => handleClick(id)}>
              {id}
            </div>
          );
        })}
    </div>
  );
};

export default Markers;
