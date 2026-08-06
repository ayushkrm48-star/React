import React from "react"

const UserContext = React.createContext();

// now after making context we have to make its provider also which will provide us the data , and then we will wrap it around the components

export default UserContext;