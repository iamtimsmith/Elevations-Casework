import React from 'react'
import Header from '../../components/header'
import Lightbox from 'react-image-lightbox'

import img1 from '../../static/DrJava.jpg'
import img2 from '../../static/DrJava2.jpg'
import img3 from '../../static/DrJava3.jpg'
import img4 from '../../static/DrJava4.jpg'
import img5 from '../../static/DrJava5.jpg'
import img6 from '../../static/Desk1.jpg'
import img7 from '../../static/Salon1.jpg'
import img8 from '../../static/GenesisGiftShop1.jpg'

const images = [
  {id:0, name:'Dr Java 1', src:img1},
  {id:1, name:'Dr Java 2', src:img2},
  {id:2, name:'Dr Java 3', src:img3},
  {id:3, name:'Dr Java 4', src:img4},
  {id:4, name:'Dr Java 5', src:img5},
  {id:5, name:'Desk 1', src:img6},
  {id:6, name:'Salon 1', src:img7},
  {id:7, name:'Genesis East Gift Shop', src:img8},
]

const linkStyle = {
  outline:'none',
  height:'300px',
  overflow:'hidden'
}
const imgStyle = {
  minHeight:'300px',
  maxWidth:'none'
}

class Commercial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex:0,
      isOpen:false
    }
  }
  render() {
    const {photoIndex, isOpen} = this.state

    return (
      <div>
        <Header />
        <div className="container content" id="content">
          <section className="section">
            <h1>Commercial</h1>
            <div className="columns is-multiline">
              {images.map((item) => (
                <a href='javascript:void(0)' className='column is-one-third' onClick={() => this.setState({ isOpen: true, photoIndex:item.id })} style={linkStyle}>
                  <img src={item.src} alt={item.name} style={imgStyle} />
                </a>
              ))}
              
        
            </div>

            {isOpen && (
              <Lightbox
                mainSrc={images[(photoIndex)].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default Commercial