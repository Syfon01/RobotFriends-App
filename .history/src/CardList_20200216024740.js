import React from 'react';
import Card from './Card'

const CardList = (robots) => {
  return (
    <div>
      <Card id = {robots[0].id} name={robots[0].} />
      <Card />
    </div>
  )
}

export default CardList