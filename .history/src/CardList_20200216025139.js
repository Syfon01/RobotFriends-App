import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <div>
      <Card id = {robots[0].id} name={robots[0].name} username={robots} email={robots[0].email} />
      <Card />
    </div>
  )
}

export default CardList