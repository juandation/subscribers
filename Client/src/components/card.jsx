import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <div className='top'>
        <h2 className='name'>{props.name}</h2>
        <h2 className='lastname'>{props.lastname}</h2>
        <h2 className='age'>{props.age}</h2>
        <h2 className='sport'>{props.sport}</h2>
      </div>
    </div>
  );
}

export default Card;
