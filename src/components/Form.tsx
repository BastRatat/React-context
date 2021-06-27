import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

const Form = () => {
  const { changeUser } = useContext(UserContext)
  const [name, setName] = useState<string>('')

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (changeUser) changeUser(name)
  }

  return (
    <form>
      <input type="text" value={name} onChange={handleNameChange} />
      <button type="submit" onClick={handleFormSubmit}>
        Change name
      </button>
    </form>
  )
}

export default Form
