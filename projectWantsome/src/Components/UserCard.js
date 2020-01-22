import React from 'react';

const UserCard = ({name, age}) => {
  return (
    <div style={{padding: '20px', border: '2px solid grey'}}>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  );
};

export default UserCard;
