import React from 'react'
import Link from 'gatsby-link'

class frontCategory extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to={this.props.url} className='has-text-centered'>
        <div style={{height:`200px`, width:`200px`, borderRadius:`100%`, overflow:`hidden`, display:`block`, margin:`0 auto`}}>
          <img src={this.props.img} alt={this.props.title} style={{height:`200px`, width:`auto`, maxWidth:`none`}} />
        </div>
        <h3>{this.props.title}</h3>
        <p style={{color:`black`}}>{this.props.desc}</p>
        <p className='is-size-4' style={{color:`#666`}}>View More >></p>
      </Link>
    )
  }
}

export default frontCategory