import { useState , useContext} from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserContext from "/Users/sumitkumarmaurya/React/08Context/src/context/UserContext.js";

function Mainapp(){
  const {user} = useContext(UserContext);
  return (<div className="min-h-screen bg-gray-100 flex items-center justify-center">
        
    {!user ? <Login key="login" /> : <Profile key="profile" />}

  </div>);
}


function App() {
  // const {user} = useContext(UserContext);
  // ye galat hain ham bhi contextprovider render hi nhi hua tab hi ham useContext kar rhe hain 
  // useContext sirf provider ke render hone ke baad hi ki jaa skti hain
  return (
    <UserContextProvider>
      <Mainapp />
    </UserContextProvider>
  );
}

export default App;
