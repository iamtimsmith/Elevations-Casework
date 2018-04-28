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
      <small className='has-text-centered' style={{fontSize:`0.8em`, position:`relative`, top:`30px`}}>
        <p className='has-text-white'>Website by <a href='https://www.iamtimsmith.com' className='has-text-white'>Tim Smith</a></p>
      </small>
    </div>
  </footer> 
)