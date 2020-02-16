import React from 'react';
import Card from './Card'

const CardList = (robots) => {
  return (
    <div>
      <Card id = {robot} />
      <Card />
    </div>
  )
}

export default CardList