import React from 'react'
import Header from '../components/header'

const NotFoundPage = () => (
  <div>
    <Header />
    <div className="container content" id="content">
      <section className="section">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </div>
  </div>
)

export default NotFoundPage
