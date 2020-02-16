import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, i )=> {
    return < Card id = {
      robots[i].id
    }
    name = {
      robots[i].name
    }
    username = {
      robots[i].username
    }
    email = {
      robots[i].email
    }
    />
  })
  return (
    <div>
      {cardComponent}
    </div>
  )
}

export default CardList