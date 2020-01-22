import React from 'react';
import Apartment from "./Apartment/Apartment";

const Apartments = () => {
  const data = [
    {
      image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/171/171770259.jpg',
      type: 'Entire apartment',
      city: 'Rome',
      name: 'Petinarhome Camper del Italia',
      stars: '4',
      typeOfHost: 'SuperHost'
    },
    {
      image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/171/171770259.jpg',
      type: 'Entire apartment',
      city: 'Rome',
      name: 'Petinarhome Camper del Iasi',
      stars: '4',
      typeOfHost: 'SuperHost'
    },
    {
      image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/171/171770259.jpg',
      type: 'Entire apartment',
      city: 'Rome',
      name: 'Petinarhome Camper del Mamamare',
      stars: '4',
      typeOfHost: 'SuperHost'
    },
    {
      image: 'https://q-cf.bstatic.com/images/hotel/max1024x768/171/171770259.jpg',
      type: 'Entire apartment',
      city: 'Rome',
      name: 'Petinarhome Camper del Constanta',
      stars: '4',
      typeOfHost: 'SuperHost'
    }
  ]

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      {data.map((cityObject, index) => {
       return <Apartment cityData={cityObject} key={index}/>
      })}

      <button>Show more apartments</button>
    </div>
  );
};

export default Apartments;
