import React from 'react';
import Slider from "react-slick";

const Index = ({ Data }) => {  // Destructure the Data prop
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const createMarkup = (content) => {
    return { __html: decodeHTML(content) };
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: false,
    autoplaySpeed: 8000,
    cssEase: "linear",
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
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
    <div className="jslider">
      <div className="row">
        <div className="_home_slider">
          {Data ? (
            <Slider {...settings}>
              {Data.map((bannerData, index) => (
                <div key={index}>
                  <div className="homeslider slide01">
                    <div className="homcolrt">
                      <img
                        src={bannerData.img}
                        className="desktop-show"
                        alt="banner"
                      />
                      <img
                        src={bannerData.mimg}
                        className="mobile-show"
                        alt="banner"
                      />
                    </div>
                    {bannerData.title ? (
                      <div className="homcolft position-absolute">
                        <h2
                          data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                          dangerouslySetInnerHTML={createMarkup(bannerData.title)}
                        ></h2>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </Slider>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Index;
