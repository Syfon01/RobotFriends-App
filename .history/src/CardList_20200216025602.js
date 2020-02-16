import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
  const cardComponejt = robots.map()
  return (
    <div>
      <Card id = {robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
      <Card />
    </div>
  )
}

export default CardList