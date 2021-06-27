import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'
import { UserContext } from './UserContext'

const App = () => {
  const [user, setUser] = useState('')

  const changeUser = (name: string) => {
    setUser(name)
  }
  return (
    <UserContext.Provider value={{ user, changeUser }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form />
          <Display />
        </header>
      </div>
    </UserContext.Provider>
  )
}

export default App
