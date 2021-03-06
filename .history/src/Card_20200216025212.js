import React from 'react';

const Card = ({id, name, username, email}) => {
  return (
    < div className = "bg-light-green br3 grow pa3 ma2 dib shadow-2" >
      < img src={`https://robohash.org/test ${id}`}
      alt = "robo" / >
      <div>
        <h3>Na{name}</h3>
        <h5>{username}</h5>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card