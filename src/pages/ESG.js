import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/esg-banner.jpg'
import Service01 from './images/esg01.jpg'
import Service02 from './images/esg02.jpg'
import Service03 from './images/esg03.jpg'
import Slider from "react-slick";
import INITIATIVES01 from './images/INITIATIVES-01.jpg'
import INITIATIVES02 from './images/INITIATIVES-02.jpg'
import INITIATIVES03 from './images/INITIATIVES-03.jpg'
import INITIATIVES04 from './images/INITIATIVES-04.jpg'
import INITIATIVES05 from './images/INITIATIVES-05.jpg'
import INITIATIVES06 from './images/INITIATIVES-06.jpg'
import INITIATIVES07 from './images/INITIATIVES-07.jpg'
import INITIATIVES08 from './images/INITIATIVES-08.jpg'
import INITIATIVES09 from './images/INITIATIVES-09.jpg'
import INITIATIVES10 from './images/INITIATIVES-10.jpg'
import { Helmet } from 'react-helmet'

export const ESG = () => {
    var settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        arrows: true,
        autoplaySpeed:8000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
      };
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/sustainbility" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">PLANET FIRST. HUMANs FIRST.</h2>
        </div>
        </div>
      </div>
    </section>
    <section id='esg' className='pb-0'>
<div className='infrastructure'>
<div className='largecircleleft'></div>
<div className='midcircleright'></div>
<div className='smallcirclerightdark'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">SUSTAINABILITY</h2>
                  </div>
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">COMMITTED TOWARDS BUILDING A SUSTAINABLE FUTURE</h3>
                  <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Sustainability is an intrinsic part of Premier Energies. We aim to provide quality products and energy-efficient solutions that focus not just on the benefit of people, but the betterment of the planet as well. </p>
                  <p>At Premier, ESG is integral to the organisation not just from an investors or company perspective, but for the wellness of the community as well. We take immense pride in our constant efforts to make the planet a better place to live and to make Premier Energies a great place to work!</p>
            </div>            
      </div>
    </div>
    <div className='infra'>
    <div className='infrabox'>
    <div className='largecircleright'></div>
<div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Environment</h2>
              </div>
             <p>With a ISO 14001 certification, Premier Energies ensures that its impact on the environment is constantly being measured and improved. By deploying energy efficient manufacturing processes, industrial-grade robots and intelligent software solutions to our production, we optimize energy use on the shop floor level. Moreover, we also utilize green energy ourselves via solar roofing at our factories and conserve water through rainfall pits and water management systems. </p>
             <p>We have set the gold standard in our space by investing in the industry’s best Zero Liquid Discharge System, which utilizes MVRE technology to use significantly less steam than traditional processes and helps us achieve a staggering recovery rate of 90%.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <img src={Service01} />
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='infrabox'>
    <div className='midcircleleft'></div>
<div className='smallcirclerightdarkleft'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Social</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier has been recognized as a ‘Great Place To Work’, while also being ISO 45001 certified for Occupational Health and Safety. With employee health and safety being a top priority, we have developed a comprehensive Contractor Safety Manual and put Incident Management Systems in place to help ensure the same. </p>
              <p>Diversity and inclusion are also major areas of focus for us, with women’s representation having been enhanced by upto 41% all around, as well as regular initiatives being undertaken for their welfare. </p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <img src={Service02} />
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='infrabox'>
    <div className='midcircleleft'></div>
<div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Governance</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our Integrated Management System Policy ensures that all aspects, processes and standards of the organisation are integrated into and governed via a single smart system. We have also brought ComRisk on board to monitor and ensure legal compliance across all domains.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <img src={Service03} />
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className='infragallery pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='web-container'>
          <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">INITIATIVES BY PREMIER</h2>
                  </div>
                  </div>
          </div>
          <div className='gallery' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <Slider {...settings2}>
            
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES07} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES08} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES09} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES10} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES01} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES04} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES05} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={INITIATIVES06} />
        </div>
      </div>
    </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
        <Footer/>
    </>
  )
}
