import React from 'react';
import Card from './Card'

const CardList = (robots) => {
  return (
    <div>
      <Card id = {robot[0].id} />
      <Card />
    </div>
  )
}

export default CardList