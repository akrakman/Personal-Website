import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    
    <nav>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <a href='resume.pdf' target='_blank'>Resume</a>
      </div>
    </nav>
  )
}