import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, i )=> {
    return <Card id = {
      robots[i].id
    }
    name = {
      robots[i].name
    }
    username = {
      robots[0].username
    }
    email = {
      robots[0].email
    }
    />
  })
  return (
    <div>
      <Card id = {robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
      <Card />
    </div>
  )
}

export default CardList