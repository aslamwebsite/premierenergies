import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Banner from "./images/investor_banner2.webp";
import Mbanner from "./images/investor-relation_mobile2.webp";
import axios from "axios";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import InvestorRealtionDiscliamer from "./components/InvestorRealtionDiscliamer";
import Cookies from "js-cookie";

export const InvestorRealation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  // API Start
  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        "https://www.premierenergies.com/api/investor_relation.php"
      );
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);
  const [shouldDisclamierd, setShouldDisclamierd] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false); // Define showComponentB state

  useEffect(() => {
    const loaderHidden = Cookies.get("loaderHidden");
    if (loaderHidden === undefined || loaderHidden === "false") {
      setShouldDisclamierd(true);
    } else {
      setShouldDisclamierd(false);
    }
  }, []);

  // Define a function to update showComponentB state
  const handleDisclamierdChange = (value) => {
    if (value === false) {
      // User selected "I do not confirm"
      setShowComponentB(true); // Show the CustomAcc component
      setShouldDisclamierd(false); // Set shouldDisclamierd to false
    } else {
      // User selected "I confirm"
      setShowComponentB(false); // Hide the CustomAcc component
      setShouldDisclamierd(false); // Set shouldDisclamierd to true
    }
  };

  // API End
  return (
    <>
      <Helmet>
        <title>Investor Relations - Premier Energies</title>
        <meta
          name="description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        />
        <link
          rel="canonical"
          href="https://premierenergies.com/investor-relations"
        />
        <meta
          property="og:url"
          content="https://premierenergies.com/investor-relations"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Investor-Relations - Premier Energies"
        />
        <meta
          name="og:description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} className="desktop-show" />
          <img src={Mbanner} className="mobile-show mobilebanner" />
        </div>
      </section>
      <div class="breadcrum pt-2">
        <div class="container">
          <div class="row">
            <div class="breadcumtab">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="career _investor_relation">
          <div className="container">
            <div className="row">
              <div className="web-container">
                {shouldDisclamierd && (
                  <InvestorRealtionDiscliamer
                    onConfirm={handleDisclamierdChange}
                  />
                )}
                {!shouldDisclamierd && showComponentB && (
                  <div className="d-flex justify-content-center col-12">
                    <h4 class="text-center not_accpt_disc col-12">
                      You are not permitted to view the materials in this
                      section of the website.
                    </h4>
                  </div>
                )}
                {!shouldDisclamierd && !showComponentB && (
                  <>
                    <div className="careerbox">
                      <div className="title text-center">
                        <span>Investor Relations</span>
                      </div>
                    </div>
                    <div
                      className="ir-container"
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      {pagedata.map((item) => {
                        // Add a conditional check to ensure item.icon is not null or undefined
                        if (item.icon) {
                          console.log(item.icon); // Add this line to see the image URLs
                          return (
                            <div key={item.id} className="ir-item">
                              <Link
                                to={`/investor-relations/${item.slug}`}
                                className="ir-link"
                              >
                                <div className="ir-image-container">
                                  <img src={item.icon} alt="" />
                                </div>
                                <h3 className="ir-title">{item.heading}</h3>
                              </Link>
                            </div>
                          );
                        } else {
                          // Handle case where item.icon is null or undefined
                          return null;
                        }
                      })}
                    </div>
                  </>
                  // Render other components
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
