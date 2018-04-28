import React from 'react'
import Header from '../../components/header'
import Lightbox from 'react-image-lightbox'

import img1 from '../../static/healthcare/AdvancedImagingCenter1-compressor.jpg'
import img2 from '../../static/healthcare/AdvancedImagingCenter2-compressor.jpg'
import img3 from '../../static/healthcare/AssociatesInDentistry1-compressor.jpg'
import img4 from '../../static/healthcare/AssociatesInDentistry2-compressor.jpg'
import img5 from '../../static/healthcare/AssociatesInDentistry3-compressor.jpg'
import img6 from '../../static/healthcare/Corner1-compressor.jpg'
import img7 from '../../static/healthcare/DiamondMedicalSpa1-compressor.jpg'
import img8 from '../../static/healthcare/DiamondMedicalSpa2-compressor.jpg'
import img9 from '../../static/healthcare/DiamondMedicalSpa3-compressor.jpg'
import img10 from '../../static/healthcare/DieWall1-compressor.jpg'
import img11 from '../../static/healthcare/DieWall2-compressor.jpg'
import img12 from '../../static/healthcare/ExamRoom1-compressor.jpg'
import img13 from '../../static/healthcare/GenesisEast1-compressor.jpg'
import img14 from '../../static/healthcare/GenesisEast2-compressor.jpg'
import img15 from '../../static/healthcare/GenesisEast3-compressor.jpg'
import img16 from '../../static/healthcare/GenesisPhysicalTherapy1-compressor.jpg'
import img17 from '../../static/healthcare/GenesisPhysicalTherapy2-compressor.jpg'
import img18 from '../../static/healthcare/GenesisPhysicalTherapy3-compressor.jpg'
import img19 from '../../static/healthcare/GenesisPhysicalTherapy4-compressor.jpg'
import img20 from '../../static/healthcare/HeartCenter1-compressor.jpg'
import img21 from '../../static/healthcare/HeartCenter2-compressor.jpg'
import img22 from '../../static/healthcare/Pool1-compressor.jpg'
import img23 from '../../static/healthcare/QCKidneyCenter1-compressor.jpg'
import img24 from '../../static/healthcare/QCKidneyCenter2-compressor.jpg'
import img25 from '../../static/healthcare/SierkOrthodontics1-compressor.jpg'
import img26 from '../../static/healthcare/SierkOrthodontics2-compressor.jpg'
import img27 from '../../static/healthcare/SierkOrthodontics3-compressor.jpg'
import img28 from '../../static/healthcare/SierkOrthodontics4-compressor.jpg'
import img29 from '../../static/healthcare/SierkOrthodontics5-compressor.jpg'
import img30 from '../../static/healthcare/SierkOrthodontics6-compressor.jpg'
import img31 from '../../static/healthcare/UnityPointExpressCareMoline1-compressor.jpg'
import img32 from '../../static/healthcare/UnityPointHumanResource1-compressor.jpg'
import img33 from '../../static/healthcare/UnityPointHumanResource2-compressor.jpg'

const images = [
  {id:0, name:'Advanced Imaging Center', src:img1},
  {id:1, name:'Advanced Imaging Center', src:img2},
  {id:2, name:'Associates in Dentistry', src:img3},
  {id:3, name:'Associates in Dentistry', src:img4},
  {id:4, name:'Associates in Dentistry', src:img5},
  {id:5, name:'Corner', src:img6},
  {id:6, name:'Diamond Medical Spa', src:img7},
  {id:7, name:'Diamond Medical Spa', src:img8},
  {id:8, name:'Diamond Medical Spa', src:img9},
  {id:9, name:'Illini Die Wall', src:img10},
  {id:10, name:'Illini DIe Wall', src:img11},
  {id:11, name:'Exam Room', src:img12},
  {id:12, name:'Genesis East', src:img13},
  {id:13, name:'Genesis East', src:img14},
  {id:14, name:'Genesis East', src:img15},
  {id:15, name:'Genesis Physical Therapy', src:img16},
  {id:16, name:'Genesis Physical Therapy', src:img17},
  {id:17, name:'Genesis Physical Therapy', src:img18},
  {id:18, name:'Genesis Physical Therapy', src:img19},
  {id:19, name:'Heart Center', src:img20},
  {id:20, name:'Heart Center', src:img21},
  {id:21, name:'Pool', src:img22},
  {id:22, name:'Quad City Kidney Center', src:img23},
  {id:23, name:'Quad City Kidney Center', src:img24},
  {id:24, name:'Sierk Orthodontic', src:img25},
  {id:25, name:'Sierk Orthodontic', src:img26},
  {id:26, name:'Sierk Orthodontic', src:img27},
  {id:27, name:'Sierk Orthodontic', src:img28},
  {id:28, name:'Sierk Orthodontic', src:img29},
  {id:29, name:'Sierk Orthodontic', src:img30},
  {id:30, name:'Unity Point Express Care Moline', src:img31},
  {id:31, name:'Unity Point Human Resource', src:img32},
  {id:32, name:'Unity Point Human Resource', src:img33},
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

class Healthcare extends React.Component {
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
            <h1>Healthcare</h1>
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

export default Healthcare