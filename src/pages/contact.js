import React from 'react'
import Header from '../components/header'
import Logo from '../static/ElevationsLogo.png'

export default () => (
  <div>
    <Header />
    <div className='container content' id='content'>
      <section className='section'>
        <h1 className='has-text-centered' style={{ marginBottom: `50px` }}>Contact Us for a Quote!</h1>
        <div className='columns'>
          <div className='column'>
            <iframe name="votar" style={{ display: 'none' }}></iframe>
            <form method="post" target="votar" id='contact' netlify-honeypot="url" data-netlify="true">
              <p id='formResponse' style={{ color: 'green', opacity: '0', transition: 'opacity .25s', textAlign: 'center' }}>Thanks for reaching out to us. We'll be in contact as soon as possible!</p>
              <input type="text" name="name" placeholder="Name" style={{ width: `100%`, padding: `5px`, fontSize: `14px`, marginBottom: `10px` }} />
              <input type="text" name="email" placeholder="Email" style={{ width: `100%`, padding: `5px`, fontSize: `14px`, marginBottom: `10px` }} />
              <input type="text" name="subject" placeholder="Subject" style={{ width: `100%`, padding: `5px`, fontSize: `14px`, marginBottom: `10px` }} />
              <p style={{ display: 'none' }}>Empty: <input type="text" name="url" /></p>
              <textarea name="message" placeholder="Message" style={{ width: `100%`, padding: `5px`, fontSize: `14px`, marginBottom: `10px` }}></textarea>
              <input type="submit" name="submit" value="Send" onClick={formSumbit} className='button' />
            </form>
          </div>
          <div className='column'>
            <img src={Logo} alt="Elevations Casework" style={{ margin: `0 auto`, display: `block` }} />
            <p style={{ margin: `0` }} className='has-text-centered'>7640 Louis Rich Court</p>
            <p style={{ margin: `0` }} className='has-text-centered'>Davenport, IA 52804</p>
            <p style={{ margin: `0` }} className='has-text-centered'>Phone: 563-381-9062</p>
            <br />
            <p style={{ margin: `0` }} className='has-text-centered'>Scott: <a href="mailto:scott@elevationscasework.com">scott@elevationscasework.com</a></p>
            <p style={{ margin: `0` }} className='has-text-centered'>Hours of Operation: 7:00am – 3:30pm</p>
          </div>
        </div>
      </section>
    </div>
  </div>
)

const formSumbit = () => {
  setTimeout(() => {
    document.getElementById('contact').reset()
    document.getElementById('formResponse').style.opacity = '1'
  }, 1000)
}