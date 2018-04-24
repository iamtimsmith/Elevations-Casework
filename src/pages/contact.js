import React from 'react'
import Logo from '../static/ElevationsLogo.png'

export default () => (
  <div className='container content' id='content'>
    <section className='section'>
      <h1 className='has-text-centered' style={{marginBottom:`50px`}}>Contact Us for a Quote!</h1>
      <div className='columns'>
        <div className='column'>
          <iframe style={{display:`none`}} id="alt"></iframe>
          <form action="form.php" target="#alt" style={{width:`100%`}}>
            <input type="text" name="name" placeholder="Name" style={{width:`100%`, padding:`5px`, fontSize:`14px`, marginBottom:`10px`}}/>
            <input type="text" name="email" placeholder="Email" style={{width:`100%`, padding:`5px`, fontSize:`14px`, marginBottom:`10px`}}/>
            <input type="text" name="subject" placeholder="Subject" style={{width:`100%`, padding:`5px`, fontSize:`14px`, marginBottom:`10px`}}/>
            <textarea name="message" placeholder="Message" style={{width:`100%`, padding:`5px`, fontSize:`14px`, marginBottom:`10px`}}></textarea>
            <input type="submit" value="Send" className='button'/>
          </form>
        </div>
        <div className='column'>
          <img src={Logo} alt="Elevations Casework" style={{margin:`0 auto`, display:`block`}}/>
          <p style={{margin:`0`}} className='has-text-centered'>7640 Louis Rich Court</p>
          <p style={{margin:`0`}} className='has-text-centered'>Davenport, IA 52804</p>
          <p style={{margin:`0`}} className='has-text-centered'>Phone: 563-381-9062</p>
          <br/>
          <p style={{margin:`0`}} className='has-text-centered'>Scott: <a href="mailto:scott@elevationscasework.com">scott@elevationscasework.com</a></p>
          <p style={{margin:`0`}} className='has-text-centered'>Hours of Operation: 7:00am – 3:30pm</p>
        </div>
      </div>
    </section>
  </div>
)