import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

const footerStyle = {
  marginTop: '10px',
}

const Display = () => {
  const { user } = useContext(UserContext)
  return (
    <footer style={footerStyle}>
      <h3>Display a new user using React Context API</h3>
      <p>User: {user}</p>
    </footer>
  )
}

export default Display
