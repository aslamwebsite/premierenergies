import React from 'react'
import Premiervideo from '../../images/premier-video.mp4';
import Mpremiervideo from '../../images/mpremier-video.mp4';
import { Numbers } from '../Numbers'

const Index = () => {
  return (
  <section id="numbers" className="p-0">
    
    <div
      className="videostn"
      data-aos="fade-in"
      data-aos-offset="500"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-duration="500"
    >
      <video autoPlay muted loop className="desktop-show">
        <source src={Premiervideo} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <video autoPlay muted loop className="mobile-show">
        <source src={Mpremiervideo} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <Numbers />
    </div>
  </section>
  )
}

export default Index