import React from 'react';

const Card = ({id, name, username, email}) => {
  return (
    < div className = "bg-light-green br3 grow pa3 ma2 dib shadow-2" >
      < img className="img-size" src={`https://robohash.org/test ${id}?200x200`}
      alt = "robo" / >
      <div>
        <h3>Name: {name}</h3>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Card