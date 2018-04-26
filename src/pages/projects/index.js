import React from 'react'
import Link from 'gatsby-link'
import Header from '../../components/header'

import comImg from '../../static/DrJava.jpg'
import eduImg from '../../static/ClintonCollege.jpg'
import heaImg from '../../static/UnityPoint.jpg'

const linkStyle = {
  height:`400px`, 
  overflow:`hidden`, 
  position:`relative`, 
  zIndex:`1`
}

const imgStyle = {
  height:`400px`, 
  width:`auto`, 
  maxWidth:`none`, 
  position:`absolute`, 
  top:`0`, 
  left:`0`
}

const overlayStyle = {
  color:`white`, 
  zIndex:`2`, 
  position:`absolute`, 
  top:`0`, 
  left:`0`, 
  right:`0`, 
  bottom:`0`, 
  display:`flex`, 
  alignItems:`center`, 
  justifyContent:`center`
}

export default () => (
  <div>
    <Header />
    <div className="container content" id="content">
      <section className="section has-text-centered">
        <h1 style={{textAlign:`left`}}>Projects</h1>
        <h3>We use top quality laminates in all our casework.</h3>
        <p>These laminates are available in numerous colors and finishes. To review available laminate or solid surface colors, visit Wilsonart®, Formica®, Nevamar® and Pionite®.</p>
        <br/>
        <div className="columns">
          <Link to='/projects/commercial' className="column" style={linkStyle}>
            <img src={comImg} alt="Commercial" style={imgStyle}/>
            <div className='overlay is-size-3' style={overlayStyle}>Commercial</div>
          </Link>
          <Link to='/projects/educational' className="column" style={linkStyle}>
            <img src={eduImg} alt="Educational" style={imgStyle}/>
            <div className='overlay is-size-3' style={overlayStyle}>Educational</div>
          </Link>
          <Link to='/projects/healthcare' className="column" style={linkStyle}>
            <img src={heaImg} alt="Healthcare" style={imgStyle}/>
            <div className='overlay is-size-3' style={overlayStyle}>Healthcare</div>
          </Link>
        </div>
      </section>
    </div>
  </div>
)