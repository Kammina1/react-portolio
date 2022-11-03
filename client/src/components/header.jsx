import React from 'react'
import {Link} from 'react-router-dom'
import '../static/header.css'

const Header = () => {
  return (
    <div className='navbar'>
        <h1>Kammin Avery</h1>
        <ul>
            <Link to="/About_Me"><li>About Me</li></Link>
            <Link to="/Portfolio"><li>Portfolio</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
            <Link to="/Resume"><li>Resume</li></Link>
        </ul>
    </div>
  )
}

export default Header