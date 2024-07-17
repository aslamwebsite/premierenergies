import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Container from '../Container/Index';

const Index = ({ Data }) => {
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const createMarkup = (content) => {
    return { __html: decodeHTML(content) };
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,  
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    Data ? (     
       <Container _parentClass={'latestNews'}>
          <div className='web-container'>
                        <div className="title text-center">                           
                              <span>News</span>                              
                            </div>
                    <div className='col-12 float-start'>
          <Slider {...settings}>
            {Data.map((newsData, index) => (
              <div key={index}>
                <div className="col-12 float-start">
                  <div className="newImg float-start col-12">
                    <img src={newsData.img} alt={`News ${index + 1}`} />
                  </div>
                  <div className='newscontent col-12 float-start'>
                  <span dangerouslySetInnerHTML={createMarkup(newsData.date)}></span>
                  <h5 dangerouslySetInnerHTML={createMarkup(newsData.heading)}></h5>
                  {newsData.descp && 
                  <p dangerouslySetInnerHTML={createMarkup(newsData.descp)}></p>
                    }
                     <div className="col-12 float-start btnEffect2">
                              <Link className="btn-4 w-auto h-auto float-start" to="/about-premier-energies">
                                <span className='opacity-100 m-0'>Read More</span>
                              </Link>
                              </div>
                </div>
                </div>
              </div>
            ))}
          </Slider>
          </div>
        </div>
       </Container>
    ) : null
  );
}

export default Index;
