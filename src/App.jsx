import { useState } from 'react'
import './App.css'
import PasswordStrengthChecker from './components/PasswordStrengthChecker.jsx'

function App() {
  return (
    <>
      <h1>Password Checker</h1>

      <PasswordStrengthChecker />

    </>
  )
}

export default App
