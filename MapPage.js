// MapPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MapPage = () => {
  const { id } = useParams();
  const destination = destinations.find(dest => dest.id === parseInt(id));

  return (
    <div>
      <h2>{destination.name} Map</h2>
      <iframe
        src={`https://www.google.com/maps?q=${destination.name}&output=embed`}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapPage;
