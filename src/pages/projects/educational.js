import React from 'react'
import Header from '../../components/header'
import Lightbox from 'react-image-lightbox'

import img1 from '../../static/educational/ClintonCommunityCollege1-compressor.jpg'
import img2 from '../../static/educational/ClintonCommunityCollege2-compressor.jpg'
import img3 from '../../static/educational/ClintonCommunityCollege3-compressor.jpg'
import img4 from '../../static/educational/ClintonCommunityCollege4-compressor.jpg'
import img5 from '../../static/educational/ClintonCommunityCollege5-compressor.jpg'
import img6 from '../../static/educational/ClintonCommunityCollege6-compressor.jpg'
import img7 from '../../static/educational/ClintonCommunityCollege7-compressor.jpg'
import img8 from '../../static/educational/MississippiBend1-compressor.jpg'
import img9 from '../../static/educational/MississippiBend2-compressor.jpg'
import img10 from '../../static/educational/MississippiBend3-compressor.jpg'
import img11 from '../../static/educational/School1-compressor.jpg'
import img12 from '../../static/educational/School2-compressor.jpg'
import img13 from '../../static/educational/School3-compressor.jpg'
import img14 from '../../static/educational/School4-compressor.jpg'
import img15 from '../../static/educational/ScottCommunityCollege1-compressor.jpg'
import img16 from '../../static/educational/ScottCommunityCollege2-compressor.jpg'
import img17 from '../../static/educational/StAmbroseUniversity1-compressor.jpg'
import img18 from '../../static/educational/StAmbroseUniversity2-compressor.jpg'
import img19 from '../../static/educational/StAmbroseUniversity3-compressor.jpg'
import img20 from '../../static/educational/StAmbroseUniversity4-compressor.jpg'
import img21 from '../../static/educational/StAmbroseUniversity5-compressor.jpg'
import img22 from '../../static/educational/StAmbroseUniversity6-compressor.jpg'
import img23 from '../../static/educational/StAmbroseUniversity7-compressor.jpg'
import img24 from '../../static/educational/StAmbroseUniversity8-compressor.jpg'
import img25 from '../../static/educational/StAmbroseUniversity9-compressor.jpg'
import img26 from '../../static/educational/StAmbroseUniversity10-compressor.jpg'
import img27 from '../../static/educational/StAmbroseUniversity11-compressor.jpg'

const images = [
  {id:0, name:'Clinton Community College', src:img1},
  {id:1, name:'Clinton Community College', src:img2},
  {id:2, name:'Clinton Community College', src:img3},
  {id:3, name:'Clinton Community College', src:img4},
  {id:4, name:'Clinton Community College', src:img5},
  {id:5, name:'Clinton Community College', src:img6},
  {id:6, name:'Clinton Community College', src:img7},
  {id:7, name:'Mississippi Bend', src:img8},
  {id:8, name:'Mississippi Bend', src:img9},
  {id:9, name:'Mississippi Bend', src:img10},
  {id:10, name:'School', src:img11},
  {id:11, name:'School', src:img12},
  {id:12, name:'School', src:img13},
  {id:13, name:'School', src:img14},
  {id:14, name:'Scott Community College', src:img15},
  {id:15, name:'Scott Community College', src:img16},
  {id:16, name:'St. Ambrose University', src:img17},
  {id:17, name:'St. Ambrose University', src:img18},
  {id:18, name:'St. Ambrose University', src:img19},
  {id:19, name:'St. Ambrose University', src:img20},
  {id:20, name:'St. Ambrose University', src:img21},
  {id:21, name:'St. Ambrose University', src:img22},
  {id:22, name:'St. Ambrose University', src:img23},
  {id:23, name:'St. Ambrose University', src:img24},
  {id:24, name:'St. Ambrose University', src:img25},
  {id:25, name:'St. Ambrose University', src:img26},
  {id:26, name:'St. Ambrose University', src:img27},
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

class Educational extends React.Component {
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
            <h1>Educational</h1>
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

export default Educational