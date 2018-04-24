import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const SecondPage = () => (
  <div>
    <Header />
    <div className='container content' id="content">
      <section className="section">
        <h1>About Us</h1>
        <p className='is-size-4 has-text-left'>Elevations has been building quality custom laminated casework products for over 20 years.</p>
        <p className='has-text-left'>Our commercial casework is built to last in high traffic, high use areas such as hospitals, colleges and banks.  Quality construction practices and pride in workmanship from our skilled craftsmen ensure our casework will provide you with a lasting quality product.</p>
        <p className="has-text-left">We use the major brands of high-pressure laminate in the manufacture of our casework.  Decorative laminate provides a tough and easy to clean surface in a range of colors, textures and designs.  These include Wilsonart®, Formica®, Nevamar® and Pionite® brand laminates.</p>
        <p className="has-text-left">We custom manufacture casework and millwork for all types of businesses, including hospitals, universities and doctor’s offices.  Therefore, our products are designed to make maximum use of your space.</p>
      </section>
    </div>
  </div>
)

export default SecondPage
