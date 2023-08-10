import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {

      // State
      const [inputValue, setInputValue] = useState("")
      const navigate = useNavigate()

      // Comportement
      const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/order/${inputValue}`)
      }
  
      const handleChange = (event) => { 
        setInputValue(event.target.value)
       }

  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez vous</h2>
    <input
      type="text"
      placeholder="Entrez votre prénom..."
      value={inputValue}
      onChange={handleChange}
      required
    />
    <button>Accéder à votre espace</button>
  </form>
  )
}