import { useState , useCallback , useEffect , useRef } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  const [password , setPassword] = useState("Password");

  const [copied , setCopied] = useState(false); 


  const passwordGenerator = useCallback(() =>{
    // useCallback returns a function either modified or same from the cache as per dependencies
    let pass = "";
    let str = "";

    str+="ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*";

    for(let i=0;i<length;i++){
      let char = str.charAt(Math.floor(Math.random()*str.length+1));
      pass+=char;
    }

    setPassword(pass);
    setCopied(false);

  },[length , numAllowed , charAllowed] , password)

  useEffect(() =>{
    // useEffect returns undefined
    passwordGenerator();
  },[passwordGenerator]);


  const passref = useRef(null);
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // useRef returns an object with a single property: current
  // .current means Jo DOM element is ref se connected hai

  return (
    <>  
      <div id="box1"> Password Generate Karlo </div>
      <div id="box">
        <div id="show">
          <input id="password"
            value={password}
            ref={passref}
            readOnly
          />
          <button onClick={() => {
              passref.current.select();

              // passref.current.setSelectionRange(0,5) this is when we do have to select any limited characters
              navigator.clipboard.writeText(password);

              setCopied(true);
            }
          }>{copied ? "Copied" : "Copy"}</button>
        </div>
        
        <div id="setters">
          <input type="range" id="length" min={8} max={16} value={length} onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="length" >Length : {length} </label>
          <input type="checkbox" id="number" onChange={(event) => setNumAllowed(event.target.checked)}/>
          <label htmlFor="number"> Numbers </label>
          <input type="checkbox"  id="characters" onChange={() => setCharAllowed((prev) => !prev)}/>
          <label for="characters">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
