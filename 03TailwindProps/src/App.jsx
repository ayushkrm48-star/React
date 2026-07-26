import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from '/Users/sumitkumarmaurya/React/03TailwindProps/components/Card.jsx'

import Header from '/Users/sumitkumarmaurya/React/03TailwindProps/components/header.jsx'


function App() {

  return (
    <>
      <div id="box">
      <Card userName ="Ayush Kumar Maurya" btnText ="Click Here"/>

      <Card userName="Sumit Kumar Maurya" btnText="Read More" />
      </div>
      <Header />

      


     
    </>
  )
}

export default App
