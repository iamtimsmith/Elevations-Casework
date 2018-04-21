import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <footer className='footer'>
    <div className='container'>
      <ul className="has-text-centered">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </footer> 
)