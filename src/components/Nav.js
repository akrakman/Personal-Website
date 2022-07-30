import React from 'react'
//import { graphql, Link, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

export default function Navbar() {
  /*const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  const { title } = data.site.siteMetadata
  */
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