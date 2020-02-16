import React from 'react';

const Card = ({id, name, username, email}) => {
  return (
    < div className = "bg-light-green br3 grow pa3 ma2 dib shadow-2" >
      < img src={`https://robohash.org/test ${id}`}
      alt = "robo" / >
      <div>
        <h3>Name: {name}</h3>
        <h5>Username:{username}</h5>
        <p>Email{email}</p>
      </div>
    </div>
  )
}

export default Card