/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import '../../styles/app.css';
import { jsx } from '@emotion/core';
import mapboxgl from 'mapbox-gl';

import { storeConfig } from '../../mapbox/storeConfig';

const Stores = () => {
  const [map, setMap] = useState();
  const mapContainer = useRef();

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
    const clickedListing = storeConfig.features.filter(
      feature => id === feature.properties.id,
    )[0];
    flyToStore(clickedListing);
    createPopUp(clickedListing);
  };

  const markerPlacement = element => {
    if (map && element) {
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
    if (mapContainer?.current) {
      mapboxgl.accessToken = storeConfig.accessToken;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [-77.034084142948, 38.909671288923],
        zoom: 13,
        pitch: 43.5,
        bearing: -17.6,
        scrollZoom: false,
      });
      setMap(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="sidebar">
        <div className="heading">
          <h1>Our locations</h1>
        </div>
        <div id="listings" className="listings">
          {storeConfig.features.map((store, idx) => {
            const id = store.properties.id;
            return (
              <div key={idx} id={`listing-${id}`} className="item">
                <button
                  id={`link-${id}`}
                  className="title"
                  onClick={() => handleClick(id)}>
                  {store.properties.address}
                </button>
                <div>{store.properties.city}</div>
                {store.properties.phone && (
                  <div>{store.properties.phoneFormatted}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div id="map" className="map" ref={mapContainer}>
        {storeConfig.features.map((feature, idx) => {
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
    </div>
  );
};

export default Stores;
