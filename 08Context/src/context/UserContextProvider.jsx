import React from "react"

import UserContext from "./UserContext.js"
// "Jo bhi components mere andar hain, un sabke liye ye value available kar do."
const UserContextProvider = ({children}) =>{
    const [user , setUser] = React.useState(null);
    // phle ye state sirf isi component tak limited thi yaa fir shared thi lekin abb provider is state ko apne niche wala compenents ke liye bhi accessible bna dega  

    return(
        <>
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
        
        </>
    )
}
// aur abb jis bhi children mein hame user , setUser ka access ka chahiye waha ham useContext(userContext) daal ke access le skte hain
export default UserContextProvider;