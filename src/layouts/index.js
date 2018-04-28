import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import 'bulma'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Elevations Casework is a cabinet shop in Davenport, IA which specializes in custom millwork, custom cabinets, and countertops for commercial, educational, and healthcare settings.' },
        { name: 'keywords', content: 'cabinet, custom millwork, countertop, custom cabinets' },
      ]}
    />
    
    <div style={{minHeight:'750px', marginTop:`60px`}} className='content'>
      {children()}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
