import React from 'react'
import { Link } from 'react-router-dom'

const ButtonTile = props => {
  return (
    <div className="grid-x grid-margin-x text-center">
      <div className="cell small-12 medium-4">
        <Link to="/" className="button">Browse All Cards</Link>
      </div>
      <div className="cell small-12 medium-4">
        <Link to="/" className="button">Search By Name</Link>
      </div>
      <div className="cell small-12 medium-4">
        <Link to="/" className="button">View By Set</Link>
      </div>
    </div>
  )
}

export default ButtonTile
