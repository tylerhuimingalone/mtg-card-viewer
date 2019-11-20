import React from 'react'
import { Link } from 'react-router-dom'

const UserButtons = props => {
  return (
    <div className="text-center">
      <hr />
      <Link to="/" className="button">My Decks</Link>
    </div>
  )
}

export default UserButtons
