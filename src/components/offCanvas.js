import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div className="card" id='offcanvas'>
    <ul style={{listStyle:`none`}}>
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
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </div>
)