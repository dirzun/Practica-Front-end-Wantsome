import React from 'react';
import ApartmentDetails from "../ApartmentDetails/ApartmentDetails";
import ApartmentRating from "../ApartmentRating/ApartmentRating";

const Apartment = ({cityData}) => {
  return (
    <div >
      <ApartmentDetails details={cityData}/>
      <ApartmentRating stars={cityData.stars} typeOfHost={cityData.typeOfHost}/>
    </div>
  );
};

export default Apartment;
