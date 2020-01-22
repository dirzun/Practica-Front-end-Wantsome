import React from 'react';

const ApartmentDetails = ({details: {image, type, city, name}}) => {
  return (
    <div>
      <img src={image} alt="" width='250px' height='250px'/>
      <span>{type} - {city} </span>
      <h2>{name}</h2>
    </div>
  );
};

export default ApartmentDetails;
