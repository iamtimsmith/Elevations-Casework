import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Category from '../components/frontCat'

import HeroImg from '../static/LangmanConstruction.jpg'
import ComImg from '../static/commercial/DrJava.jpg'
import EduImg from '../static/ClintonCollege.jpg'
import MedImg from '../static/UnityPoint.jpg'

const IndexPage = () => (
  <div>
    <Header />
    <div className='content' id="content">
      <section className="section hero has-text-centered" style={{backgroundImage:`url("${HeroImg}")`, backgroundSize:'cover', textShadow:`0 0 10px black`, position:`relative`, height:`650px`, justifyContent:`flex-end`}}>
        <div style={{position:`absolute`, top:`0`, bottom:`0`, left:`0`, right:`0`, background:`rgba(0,0,0,0.2)`}}></div>
        <div>
          <h1 className='has-text-white' style={{zIndex:`1`}}>Elevations Quality</h1>
          <p style={{color:`white`, maxWidth:`650px`, margin:`0 auto`, zIndex:`1`, fontWeight:`500`}}>Decorative laminate provides a durable and easy-to-clean surface in a range of colors, textures, and patterns. These include Wilsonart® and Formica® brand laminates. Solid surfaces, such as Corian® and Meganite® are also available.</p>
        </div>
      </section>
      <section className="section container">
        <div className="columns">
          <div className="column">
            <Category title='Commercial Setting' img={ComImg} url='/projects/commercial' desc="Elevations' products are built to last. They can stand the test of time, so you can continue to serve your customers while our cabinets and countertops serve you." />
          </div>
          <div className="column">
            <Category title='Educational Setting' img={EduImg} url='/projects/educational' desc="We build custom desks and podiums for universities. Choose from a large palette of laminates and solid surface countertops to match any classroom setting." />
          </div>
          <div className="column">
            <Category title='Healthcare Setting' img={MedImg} url='/projects/healthcare' desc="Our office furniture and receptionist stations are built to give you the most functionality and maximize your space while looking sleek and modern." />
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default IndexPage
