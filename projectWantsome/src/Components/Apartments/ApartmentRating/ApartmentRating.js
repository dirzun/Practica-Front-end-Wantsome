import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faStar, faCoffee);

const ApartmentRating = ({stars, typeOfHost}) => {
  return (
    <div>
      <span>{stars}</span>
      <FontAwesomeIcon icon={faStar}/>
      <span>{typeOfHost}</span>
    </div>
  );
};

export default ApartmentRating;
