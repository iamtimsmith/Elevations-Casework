import React from 'react'
import Header from '../../components/header'
import Lightbox from 'react-image-lightbox'

import img1 from '../../static/commercial/DrJava-compressor.jpg'
import img2 from '../../static/commercial/DrJava2-compressor.jpg'
import img3 from '../../static/commercial/DrJava3-compressor.jpg'
import img4 from '../../static/commercial/DrJava4-compressor.jpg'
import img5 from '../../static/commercial/DrJava5-compressor.jpg'
import img6 from '../../static/commercial/Desk1-compressor.jpg'
import img7 from '../../static/commercial/GasStation1-compressor.jpg'
import img8 from '../../static/commercial/GasStation2-compressor.jpg'
import img9 from '../../static/commercial/GenesisGiftShop1-compressor.jpg'
import img10 from '../../static/commercial/GenesisGiftShop2-compressor.jpg'
import img11 from '../../static/commercial/Iowa80TruckStop1-compressor.jpg'
import img12 from '../../static/commercial/LangmanConstruction-compressor.jpg'
import img13 from '../../static/commercial/LangmanConstruction2-compressor.jpg'
import img14 from '../../static/commercial/LangmanConstruction3-compressor.jpg'
import img15 from '../../static/commercial/LangmanConstruction4-compressor.jpg'
import img16 from '../../static/commercial/LangmanConstruction5-compressor.jpg'
import img17 from '../../static/commercial/LangmanConstruction6-compressor.jpg'
import img18 from '../../static/commercial/LangmanConstruction7-compressor.jpg'
import img19 from '../../static/commercial/LangmanConstruction8-compressor.jpg'
import img20 from '../../static/commercial/LangmanConstruction9-compressor.jpg'
import img21 from '../../static/commercial/LangmanConstruction10-compressor.jpg'
import img22 from '../../static/commercial/LangmanConstruction11-compressor.jpg'
import img23 from '../../static/commercial/LangmanConstruction12-compressor.jpg'
import img24 from '../../static/commercial/LangmanConstruction13-compressor.jpg'

const images = [
  {id:0, name:'Dr Java 1', src:img1},
  {id:1, name:'Dr Java 2', src:img2},
  {id:2, name:'Dr Java 3', src:img3},
  {id:3, name:'Dr Java 4', src:img4},
  {id:4, name:'Dr Java 5', src:img5},
  {id:5, name:'Desk 1', src:img6},
  {id:6, name:'Iowa 80 Truck Stop', src:img7},
  {id:7, name:'Iowa 80 Truck Stop', src:img8},
  {id:8, name:'Genesis Gift Shop', src:img9},
  {id:9, name:'Genesis Gift Shop', src:img10},
  {id:10, name:'Iowa 80 Truck Stop', src:img11},
  {id:11, name:'Langman Construction', src:img12},
  {id:12, name:'Langman Construction', src:img13},
  {id:13, name:'Langman Construction', src:img14},
  {id:14, name:'Langman Construction', src:img15},
  {id:15, name:'Langman Construction', src:img16},
  {id:16, name:'Langman Construction', src:img17},
  {id:17, name:'Langman Construction', src:img18},
  {id:18, name:'Langman Construction', src:img19},
  {id:19, name:'Langman Construction', src:img20},
  {id:20, name:'Langman Construction', src:img21},
  {id:21, name:'Langman Construction', src:img22},
  {id:22, name:'Langman Construction', src:img23},
  {id:23, name:'Langman Construction', src:img24},
]

const linkStyle = {
  outline:'none',
  overflow:'hidden',
  position:'relative'
}
const imgStyle = {
  height:'auto',
  width:'150%',
  minHeight:'100%',
  maxWidth:'none',
  position:'absolute'
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
                <a href='javascript:void(0)' className='column is-one-quarter gallery-item' onClick={() => this.setState({ isOpen: true, photoIndex:item.id })} style={linkStyle}>
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