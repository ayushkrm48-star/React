import {useState} from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("Grey");

  return (
    <>
      <div id="bg" style={{backgroundColor : color}}>
        <div id="box">
          <button onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("Blue")} style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("Green")} style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("Orange")} style={{backgroundColor:"orange"}}>Orange</button>
        </div>
        
      </div>
    </>
  )
}

export default App
