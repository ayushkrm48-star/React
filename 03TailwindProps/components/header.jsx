import React from 'react'
import './header.css'
function Header(props){
    return(
        <>
        <div id="header">
            <button id="header1">React</button>
            <div id="header2">
                <button>About us</button>
                <button>Features</button>
                <button>Benefits</button>
                <button>FAQ</button>
            </div>
            <button id="header3">Sign In</button>
        </div>
        </>
    )
}

export default Header