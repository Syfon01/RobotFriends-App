import React from 'react';

const Card = ({email, user}) => {
  return (
    < div className = "bg-light-green br3 grow pa3 ma2 dib shadow-2" >
      < img src = "https://robohash.org/test"
      alt = "robo" / >
      <div>
        <h3>Tony Cletus</h3>
        <p>tony@gmail.com</p>
      </div>
    </div>
  )
}

export default Card