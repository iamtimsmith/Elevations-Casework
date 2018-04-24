import React from 'react'
import Link from 'gatsby-link'
import Logo from '../static/ElevationsLogo.png'
import OffCanvas from './offCanvas'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className='navbar' style={{position:`fixed`, top:`0`, left:`0`, right:`0`}}>
        <div className="container">
          <div className="navbar-start" style={{display:'flex'}}>
            <div className="navbar-brand" id='navbarBrand'>
              <Link to='/'><img src={Logo} alt='Elevations Casework' /></Link>
            </div>
            <button className="offcanvas-toggle" id='offcanvasToggle' onClick={toggleOffcanvas} style={{marginLeft:'auto', border:'none', zIndex:'2'}}><span></span></button>
            <OffCanvas />
          </div>
          <ul className="navbar-menu navbar-end">
            <li className="navbar-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="navbar-item">
              <Link to='/about'>About</Link>
            </li>
            <li className="navbar-item">
              <Link to='/projects'>Projects</Link>
            </li>
            <li className="navbar-item">
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header

const toggleOffcanvas = () => {
  const brand = document.getElementById('navbarBrand').classList
  const btn = document.getElementById('offcanvasToggle').classList
  const off = document.getElementById('offcanvas').classList
  brand.contains('hidden') ? brand.remove('hidden') : brand.add('hidden')
  btn.contains('active') ? btn.remove('active') : btn.add('active')
  off.contains('showing') ? off.remove('showing') : off.add('showing')
}