import React from 'react';

const Profile = ({name, imageUrl}) => {

  return (
    <div>
      <img src={imageUrl} alt="" width='250px' height='250px'/>
      <h1>Hi I am {name}</h1>
    </div>
  );
};

export default Profile;
