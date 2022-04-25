import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -23.57289620815996,
  lng: -46.68890673896388,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBaKVjAShQ9QMQ9rd008CzENTBwQBnkzLk',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    ></GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
