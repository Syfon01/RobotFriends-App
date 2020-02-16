import React from 'react';

const Card = ({id, name, email}) => {
  return (
    < div className = "bg-light-green br3 grow pa3 ma2 dib shadow-2" >
      < img src =`https://robohash.org/test${id}`
      alt = "robo" / >
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card