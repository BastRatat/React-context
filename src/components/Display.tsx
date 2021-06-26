import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const Display = () => {
  const { user, changeUser } = useContext(UserContext)
  return (
    <div>
      <p>{user} is online from a Consumer.</p>
      <button type="submit" onClick={changeUser}>
        Change user
      </button>
    </div>
  )
}

export default Display
