import React , {useState , useEffect } from "react"
import { ThemeProvider } from "./Context/Theme"
import ThemeBtn from "./Components/themebtn";
import Card from "./Components/Card";

function App() {
  const [themeMode , setthemeMode] = useState("light");

  // dekho darktheme aur lighttheme initial context ke andar empty the yani unme koi functionality nhi thi but abb hamne yaha pe aake functionality dedi

  const darkTheme = () =>{
    setthemeMode("dark");
  }


  const lightTheme = () =>{
    setthemeMode("light");
  }

  // now we have to actully change the theme mode , this will be done by the help of pure js
  useEffect(()=>{
    document.querySelector('html').classList.remove("light" , "dark");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])


  return (
    <>
    <ThemeProvider value = {{themeMode , darkTheme ,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
    </div>
    </ThemeProvider>
    </>
  )
}

export default App
