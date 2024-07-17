import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";
import HomeSlider from './components/Slider/Index';
import LatestNew from './components/LatestNews/Index';
import Img01 from './img/latestNews.webp'
import Image01 from './img/homeBanner01.jpg';
import Imagem01 from './img/homeBanner01.jpg';
import Image02 from './img/homeBanner02.jpg';
import Imagem02 from './img/homeBanner02.jpg';
import Image03 from './img/homeBanner03.jpg';
import Imagem03 from './img/homeBanner03.jpg';
import Image04 from './img/homeBanner04.jpg';
import Imagem04 from './img/homeBanner04.jpg';
import Image05 from './img/homeBanner05.jpg';
import Imagem05 from './img/homeBanner05.jpg';
import Aboutus from "./components/About/Aboutus";
import Loaders from "./components/Loaders/Index"
import Solarcell from "./images/product02.webp";
import Solarmodule from "./images/product01.webp";
import { Link } from "react-router-dom";

const sliderData = {
  banners: [
    { img: Image01, mimg: Imagem01 },
    { img: Image02, mimg: Imagem02 },
    { img: Image03, mimg: Imagem03 },
    { img: Image04, mimg: Imagem04 },
    { img: Image05, mimg: Imagem05 },
  ]
};

const newData = {
  news: [
    { img: Img01, heading: 'Best ESG Performance-Product Stewardship', date: '2023-11-06' },
    { img: Img01, heading: 'Mega Order Worth USD 130M Bagged!', date: '2023-11-06' },
    { img: Img01, heading: 'Great Place to Work- Twice in a row', date: '2023-11-06' },
    { img: Img01, heading: 'Best ESG Performance-Product Stewardship', date: '2023-11-06' },
    { img: Img01, heading: 'Mega Order Worth USD 130M Bagged!', date: '2023-11-06' },
    { img: Img01, heading: 'Great Place to Work- Twice in a row', date: '2023-11-06' },
    { img: Img01, heading: 'Best ESG Performance-Product Stewardship', date: '2023-11-06' },
    { img: Img01, heading: 'Mega Order Worth USD 130M Bagged!', date: '2023-11-06' },
    { img: Img01, heading: 'Great Place to Work- Twice in a row', date: '2023-11-06' },
  ]
};

const Home = () => {
  const [popup, setPopup] = useState(false);
  const [enquireForm, setEnquireForm] = useState(false);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.premierenergies.com/api/homes.php");
        setPageData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTogglePopup = () => setPopup(!popup);
  const handleToggleEnquireForm = () => setEnquireForm(!enquireForm);

  return (
    <>
      <Helmet>
        <title>
          India's leading manufacturer and supplier of PV Solar Cells and Modules
        </title>
        <meta
          name="description"
          content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is LEED Gold Certified Solar Manufacturing Company."
        />
        <link rel="canonical" href="https://premierenergies.com/" />
        <meta property="og:url" content="https://premierenergies.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="India's leading manufacturer and supplier of PV Solar Cells and Modules"
        />
        <meta
          name="og:description"
          content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is LEED Gold Certified Solar Manufacturing Company."
        />
      </Helmet>
      <Header />
      <HomeSlider Data={sliderData.banners} />
      <Aboutus />
      <LatestNew Data={newData.news} />
      <Loaders />
      <section id="products">
        <div className="products col-12 float-start flex-wrap">
                  <div className="col-12 float-start">
                  <div className="container">
                    <div className="web-container">
                    <div className="title text-center mb-0">
                    <span>
                      Products
                    </span>
                </div>
                    </div>
                  </div>
                  </div>
                <div className="productsbox col-12 float-start justify-content-between  mt-5">
                <div
                    className="productcont"
                    data-aos="fade-right"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="producthimg col-12 float-start">
                      <img src={Solarmodule} alt="" className="col-12 float-start"/>
                    </div>
                    <div className="productCont">
                      <div className="col-lg-8 col-12 m-auto">
                      <h4>SOLAR MODULE</h4>
                    <p>
                      Our Polycrystalline and Mono PERC Solar Modules, ranging
                      from 108-144 Solar Cells, serve an efficiency of upto 22%.
                    </p>
                    <div className="webbtn">
                      <Link
                        className="btn-4 m-0"
                        to="/products/solar-module"
                        data-aos="fade-up"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="productcont"
                    data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    <div className="producthimg col-12 float-start">
                      <img src={Solarcell} alt="" className="col-12 float-start"/>
                    </div>
                    <div className="productCont">
                    <div className="col-lg-7 col-12 m-auto">
                      <h4>SOLAR CELL</h4>
                    <p>
                      We manufacture Mono PERC Cells with a conversion
                      efficiency of upto 23.7%.
                    </p>
                    <div className="webbtn">
                      <Link
                        className="btn-4 m-0"
                        to="/products/solar-cell"
                        data-aos="fade-up"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                      </div>
                    </div>
                  </div>
               
                </div>
        </div>
      </section>
     
      <section id="technology" className="p-0">
          <div className="technology technologybanner p-80">
            <div className="container">
              <div className="row">
                <div className="web-container">
                <div className="title text-center">
                    <span className="text-white">
                      TECHNOLOGY
                    </span>
                  </div>
                  <h3 className="heading1 mb-5">
                    Cutting edge technology at <br />
                    E-City, Hyderabad
                  </h3>
                  <div className="quote">
                    <div
                      className="quotebox"
                      data-aos="fade-left"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Cell Efficiency</h4>
                      <p>
                        Automated mono PERC manufacturing line, with a cell
                        efficiency of 23.3%.
                      </p>
                    </div>
                    <div
                      className="quotebox"
                      data-aos="fade-down"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Fully Automated</h4>
                      <p>
                        State-of-the-art Module line, equipped to handle
                        half-cut cells and bifacial modules.
                      </p>
                    </div>
                    <div
                      className="quotebox"
                      data-aos="fade-right"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      <h4>Zero-Liquid Discharge System</h4>
                      <p>
                        For end-to-end treatment, recycling and reuse of
                        processed water.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="sustainbility">
        <div className="sustainbility">
          <div className="container">
            <div className="row">
              <div className="web-container">
                  <div className="col-lg-8 col-12 m-auto">
                  <div className="sustainbox flex-wrap text-center">
                    <div className="title centerheading">
                      <span className="text-white"
                      >
                        SUSTAINABILITY
                      </span>
                    </div>
                    <h3
                       className="text-white text-center col-12 float-start"
                    >
                      From Nature. FOR Nature.
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="500"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                       className="text-white"
                    >
                      At Premier Energies, sustainability is our utmost
                      priority. Our goal is to provide new-age, energy efficient
                      solutions and quality products to power new possibilities
                      for the planet and its people. We believe in working in
                      harmony with nature, evolving every single day towards
                      making sustainable progress for a cleaner, greener
                      tomorrow.
                    </p>
      <div className="col-12 float-start d-flex justify-content-center">
                    <Link className="btn-4" to="/sustainbility">
                      <span className="text-white">Read More</span>
                    </Link>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
