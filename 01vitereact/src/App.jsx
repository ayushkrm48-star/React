import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Test1(){
  const name = "Ayush Kumar Maurya";
  const age = 19;
  return(
    <h1> My Name is {name} and My is Age is {age}</h1>
  )
}

function App() {
  return (
    <>
    <Test1 /> 

    <h3>Hello Tech World This is My first React Project</h3>
    </>
  )
}

export default App
