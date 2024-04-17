import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
         <nav>
                    <span>
                        <Link to="/">Home</Link>
                    </span>
                    <span>
                        <Link to={'About'}>About</Link>
                    </span>
                    <span>
                        <Link to={"Contact"}>Contact</Link>
                    </span>
                </nav>
    </div>
  )
}

export default NavBar