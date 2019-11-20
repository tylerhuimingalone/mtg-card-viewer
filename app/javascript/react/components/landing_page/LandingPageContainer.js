import React, { useState, useEffect } from 'react'

import ButtonTile from './ButtonTile'
import UserButtons from '../shared_components/UserButtons'

const LandingPageContainer = props => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch("/api/v1/users")
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setUser(body.user)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  },[])

  let userButtons = ""
  if (user) {
    userButtons = <UserButtons />
  }

  return (
    <div>
      <h1 className="text-center">Magic: the Gathering card finder</h1>
      <hr />
      <ButtonTile />
      {userButtons}
    </div>
  )
}

export default LandingPageContainer
