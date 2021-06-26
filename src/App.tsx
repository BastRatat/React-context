import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Display from './components/Display'
import { UserContext } from './UserContext'

const userOne = 'Bastien Ratat'
const userTwo = 'Antoine Ratat'

const App = () => {
  const [user, setUser] = useState(userOne)

  const changeUser = () => {
    if (user === userOne) setUser(userTwo)
    if (user === userTwo) setUser(userOne)
  }
  return (
    <UserContext.Provider value={{ user, changeUser }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Display />
        </header>
      </div>
    </UserContext.Provider>
  )
}

export default App
