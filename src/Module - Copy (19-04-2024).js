import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Helmet } from "react-helmet";
import { useHistory, useParams } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import PDF from "./PDF/PDF4_new.pdf";
import axios from "axios";
import Img01 from "./images/PE-Logo -1b.jpg";
import Img02 from "./images/PE-Logo -2.jpg";
import Img03 from "./images/PE-Logo -3.jpg";
import Img04 from "./images/PE-Logo -4.jpg";
import Img05 from "./images/PE-Logo -5.jpg";
import Img06 from "./images/PE-Logo -6.jpg";
import Img07 from "./images/PE-Logo -7.jpg";
import Img08 from "./images/PE-Logo -8.jpg";
import Img09 from "./images/PE-Logo -9.jpg";
import Img10 from "./images/PE-Logo -10.png";
import Img11 from "./images/PE-Logo -11.png";
import Img12 from "./images/PE-Logo -12.png";
import Img13 from "./images/PE-Logo -13.png";
import Img14 from "./images/PE-Logo -14.jpg";
import Img15 from "./images/PE-Logo -15.png";
import Img16 from "./images/PE-Logo -16.png";
import Img17 from "./images/PE-Logo -17.jpg";
import Img18 from "./images/PE-Logo -18.png";
import Img19 from "./images/PE-Logo -19.png";
import Img20 from "./images/PE-Logo -20.png";
import PEVEL from "./images/PEVEL.jpg";

var decodeHTML = function (html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

function createMarkup(content) {
  return { __html: decodeHTML(content) };
}

export const Module = ({ match }) => {
  const { slug } = useParams();

  // API Code Start
  // const slug = match.params.slug;
  const [pagedata, setPagedata] = useState([]);

  const [enquirefrm, setActive1] = useState("false");

  const handleToggle1 = () => {
    setActive1(!enquirefrm);
  };
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState("p");

  console.log("this is the type", tabData);
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      console.log("this is the typre befor hte ", tabData);
      const response = await axios.get(
        `https://www.premierenergies.com/api/product_details.php?prourl=${slug}&types=${tabData}`
      );
      setPagedata(response.data);
    };

    loadData();
  }, [slug, tabData, activeTab]);
  const handleTabClick = (index) => {
    setActiveTab(index);
    const newTab = index === 0 ? "p" : "n";
    setTabData(newTab);
  };

  console.log(pagedata);
  if (pagedata.length == 0) {
    console.log("no data");
    return null;
  }
  // API Code End
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
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
    <>
      <Helmet>
        <title>{pagedata.products.meta_title}</title>
        <meta name="description" content={pagedata.products.meta_desc} />
        <link
          rel="canonical"
          href={"https://premierenergies.com/products/" + slug}
        />
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={pagedata.products.bannerpic} class="desktop-show align" />
          <img src={pagedata.products.mbannerpic} class="mobile-show" />
          <div className="container">
            <div
              className={
                pagedata.products.category != "SOLAR CELL"
                  ? "homcolft position-absolute position-right"
                  : "homcolft position-absolute position-right"
              }
            >
              {pagedata.products.banner_head ? (
                <>
                  <span className="colorborder">
                    <em></em>
                  </span>
                  <h2
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.products.banner_head
                    )}
                  ></h2>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {pagedata.products.cahead ? (
        <section id="coreadvantage">
          <div className="coreadvantage">
            <div className="largecircleleft"></div>
            {/* <div className='midcircleright'></div> */}
            {/* <div className='smallcirclerightdark'></div> */}
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="title centerheading">
                    <div className="centerit">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h2
                        data-aos="fade-down"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        CORE ADVANTAGES
                      </h2>
                    </div>
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="heading2"
                    dangerouslySetInnerHTML={createMarkup(
                      pagedata.products.cahead
                    )}
                  ></h3>
                  <div className="modulesrely">
                    <div className="row">
                      <div className="col-md-3 col-xs-12">
                        <div className="modulebox">
                          {/* Loop Start */}
                          {pagedata.products.c_advantage1.map((cAdvantage) => (
                            <div className="moduleinfo">
                              <img src={cAdvantage.icon} />
                              <h4>{cAdvantage.title}</h4>
                              <p
                                dangerouslySetInnerHTML={createMarkup(
                                  cAdvantage.descp
                                )}
                              ></p>
                            </div>
                          ))}
                          {/* Loop End */}
                        </div>
                      </div>
                      <div className="col-md-5 col-xs-12">
                        <div className="modulesolr">
                          <img src={pagedata.products.caimg} />
                        </div>
                      </div>
                      <div className="col-md-3 col-xs-12">
                        <div className="modulebox">
                          {/* Loop Start */}
                          {pagedata.products.c_advantage2.map((cAdvantage2) => (
                            <div className="moduleinfo">
                              <img src={cAdvantage2.icon} />
                              <h4>{cAdvantage2.title}</h4>
                              <p
                                dangerouslySetInnerHTML={createMarkup(
                                  cAdvantage2.descp
                                )}
                              ></p>
                            </div>
                          ))}
                          {/* Loop End */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <section
        id="Solar"
        className={`pb-0 ${
          pagedata.products.category == "SOLAR MODULE" ? "p-0" : ""
        }`}
      >
        <div className="infrastructure">
          <div className="largecircleleft"></div>
          <div className="midcircleright"></div>
          <div className="smallcirclerightdark"></div>
          <div className="container">
            <div className="row">
              <div className="web-container">
                {/* <div className="title centerheading">
                  <div className="centerit">
                    <span className="colorborder">
                      <em></em>
                    </span>
                    <h1
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      {pagedata.products.ptitle}
                    </h1>
                  </div>
                </div> */}
                {/* <h2 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500" className='heading2' dangerouslySetInnerHTML={createMarkup(pagedata.products.ptitle)}></h2>
                  <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"  dangerouslySetInnerHTML={createMarkup(pagedata.products.pdesc)}></div>                 */}
              </div>
            </div>
          </div>
          {pagedata.products.sub_category ? (
            <div className="infra" id="types">
              <div className="infrabox">
                <div className="largecircleright"></div>
                <div className="smallcirclerightdark"></div>
                <div className="container">
                  <div className="web-container">
                    {pagedata.products.category == "SOLAR MODULE" && (
                      <div className="celltabs main_tabs">
                        <ul>
                          <li
                            onClick={() => handleTabClick(0)}
                            className={activeTab == 0 ? "active" : ""}
                          >
                            P TYPE
                          </li>
                          <li
                            onClick={() => handleTabClick(1)}
                            className={activeTab == 1 ? "active" : ""}
                          >
                            N TYPE
                          </li>
                        </ul>
                      </div>
                    )}
                    <div className="typesmodule">
                      {pagedata.sub_category_count > 1 ? (
                        <div className="celltabs">
                          <ul>
                            {pagedata.products.sub_category.map(
                              (subCat2, index) => (
                                <li>
                                  <Link
                                    activeClass="active"
                                    to={"tab" + (parseInt(index) + 1)}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    dangerouslySetInnerHTML={createMarkup(
                                      subCat2.cat_head2
                                    )}
                                  ></Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ) : null}
                      {/* Loop Start */}
                      {pagedata.products.sub_category.map((subCat, index) => (
                        <div
                          className="infracenter"
                          id={"tab" + (parseInt(index) + 1)}
                        >
                          <div className="row">
                            <div className="infotitle">
                              <h2
                                dangerouslySetInnerHTML={createMarkup(
                                  subCat.cat_head
                                )}
                              ></h2>
                              <h3
                                dangerouslySetInnerHTML={createMarkup(
                                  subCat.cate_title
                                )}
                              ></h3>
                            </div>
                          </div>
                          <div
                            className={
                              pagedata.products.category != "SOLAR CELL"
                                ? subCat.power_output && subCat.power_output2
                                  ? "row cellalign3"
                                  : "row"
                                : "row cellalign2"
                            }
                          >
                            <div className="col-md-7">
                              <div
                                className="infracont gredientbox"
                                data-aos="fade-right"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                <div
                                  className={
                                    pagedata.products.category != "SOLAR CELL"
                                      ? "row"
                                      : "row cellalign"
                                  }
                                >
                                  <div className="col-md-12">
                                    <div
                                      className={
                                        pagedata.products.category !=
                                        "SOLAR CELL"
                                          ? "preinfo preinfoborder"
                                          : "preinfo"
                                      }
                                    >
                                      {!subCat.power_output ? (
                                        <div className="corefeature f-cell">
                                          <h4>Core Features</h4>
                                          <ul>
                                            {subCat.core_features.map(
                                              (coreF) => (
                                                <li
                                                  dangerouslySetInnerHTML={createMarkup(
                                                    coreF.title
                                                  )}
                                                ></li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      ) : null}
                                      {subCat.power_output ? (
                                        <>
                                          <div
                                            className={
                                              subCat.power_output2
                                                ? "powerputh autoWidth"
                                                : "powerputh"
                                            }
                                          >
                                            <span className="powerput">
                                              Power Output{" "}
                                              {subCat.poweroutputtitle
                                                ? subCat.poweroutputtitle
                                                : null}
                                            </span>
                                            {pagedata.products.category !=
                                            "SOLAR CELL" ? (
                                              <ul
                                                className={
                                                  subCat.power_output2
                                                    ? "multimodual"
                                                    : ""
                                                }
                                              >
                                                {subCat.power_output.map(
                                                  (powerO) => (
                                                    <li
                                                      className={
                                                        subCat.types == "n"
                                                          ? "w-100"
                                                          : ""
                                                      }
                                                      dangerouslySetInnerHTML={createMarkup(
                                                        powerO.title
                                                      )}
                                                    ></li>
                                                  )
                                                )}
                                              </ul>
                                            ) : (
                                              <>
                                                {subCat.power_output.map(
                                                  (data) => {
                                                    return (
                                                      <h3
                                                        dangerouslySetInnerHTML={createMarkup(
                                                          data.title
                                                        )}
                                                      ></h3>
                                                    );
                                                  }
                                                )}
                                              </>
                                            )}
                                          </div>
                                        </>
                                      ) : null}
                                      {subCat.power_output2 ? (
                                        <>
                                          <div
                                            className={
                                              subCat.power_output2
                                                ? "powerputh autoWidth"
                                                : "powerputh"
                                            }
                                          >
                                            <span className="powerput">
                                              Power Output{" "}
                                              {subCat.poweroutputtitle2
                                                ? subCat.poweroutputtitle2
                                                : null}
                                            </span>
                                            <ul
                                              className={
                                                subCat.power_output2
                                                  ? "multimodual"
                                                  : ""
                                              }
                                            >
                                              {subCat.power_output2.map(
                                                (powerO2) => (
                                                  <li
                                                    dangerouslySetInnerHTML={createMarkup(
                                                      powerO2.title
                                                    )}
                                                  ></li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                  {subCat.power_output ? (
                                    <div className="col-md-12">
                                      <div className="corefeature">
                                        <h4>Core Features</h4>
                                        {subCat.core_features && (
                                          <ul>
                                            {subCat.core_features.map(
                                              (coreF) => (
                                                <li
                                                  dangerouslySetInnerHTML={createMarkup(
                                                    coreF.title
                                                  )}
                                                ></li>
                                              )
                                            )}
                                          </ul>
                                        )}

                                        {subCat.warranty ? (
                                          <div className="warranty">
                                            <ul>
                                              {/* Loop Start */}
                                              {subCat.warranty.map(
                                                (warData) => (
                                                  <>
                                                    <li>
                                                      <strong>
                                                        {warData.number}
                                                        <small
                                                          dangerouslySetInnerHTML={createMarkup(
                                                            warData.text
                                                          )}
                                                        ></small>
                                                      </strong>
                                                      <span
                                                        dangerouslySetInnerHTML={createMarkup(
                                                          warData.descp
                                                        )}
                                                      ></span>
                                                    </li>
                                                  </>
                                                )
                                              )}
                                            </ul>
                                            {/* Loop End */}
                                          </div>
                                        ) : null}
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div
                                className="infraslider"
                                data-aos="fade-left"
                                data-aos-offset="100"
                                data-aos-easing="ease-in-sine"
                                data-aos-once="true"
                                data-aos-duration="500"
                              >
                                <img src={subCat.cate_img} />
                              </div>
                            </div>
                          </div>
                          {subCat.downloadData ? (
                            <div className="row">
                              <div className="downloadsheet">
                                <h4 class="subhead">Download Data Sheet</h4>
                                <div className="warranty downloads">
                                  <ul>
                                    {subCat.downloadData.map((downloadData) => (
                                      <>
                                        <li>
                                          <a
                                            href={downloadData.link}
                                            target="_blank"
                                            dangerouslySetInnerHTML={createMarkup(
                                              downloadData.text
                                            )}
                                          ></a>
                                        </li>
                                      </>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : null}
                          {subCat.downloadData2 ? (
                            <div className="row">
                              <div className="downloadsheet">
                                <h4 class="subhead">Download Data Sheet</h4>
                                <div className="warranty downloads">
                                  <ul>
                                    {subCat.downloadData2.map(
                                      (downloadData) => (
                                        <>
                                          <li>
                                            <a
                                              href={downloadData.link}
                                              target="_blank"
                                              dangerouslySetInnerHTML={createMarkup(
                                                downloadData.text
                                              )}
                                            ></a>
                                          </li>
                                        </>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}

                      {/* Loop End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      {/*  */}
      {pagedata.p_config ? (
        <section id="configration">
          <div className="configration">
            <div className="container">
              <div className="row">
                <div className="web-container">
                  <div className="packconfig">
                    <div className="packdetails">
                      <h4>Packing Configuration</h4>
                      <ul>
                        {pagedata.p_config.map((pConfig, index) => (
                          <li>
                            <span>
                              {index == 0 ? "Container" : ""}
                              {index == 1 ? "Pieces per Pallet" : ""}
                              {index == 2 ? "Pallets per Container" : ""}
                              {index == 3 ? "Pieces per Container" : ""}
                            </span>
                            {pConfig.data.map((finalData) => (
                              <>
                                <span>{finalData.title}</span>
                              </>
                            ))}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {pagedata.products.certificate ? (
        <section id="certifications" className="p-0 ">
          <div className="certifications bg-white">
            <div className="largecircleleft"></div>
            <div className="midcircleright"></div>
            <div className="smallcirclerightdark"></div>
            <div className="container">
              <div className="web-container">
                <div className="title centerheading">
                  <div className="centerit">
                    <span className="colorborder">
                      <em></em>
                    </span>
                    <h2
                      data-aos="fade-down"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine"
                      data-aos-once="true"
                      data-aos-duration="500"
                    >
                      Certifications
                    </h2>
                  </div>
                </div>

                {pagedata.products.certificate ? (
                  <div className="qualitytest">
                    <div className="qualityhead">
                      <h4 className="subhead">Quality Certified Test</h4>
                    </div>
                    <div className="pevel_cert">
                      <img src={PEVEL} alt="pvel-certification" />
                    </div>
                    <div className="certificates new_layout">
                      <ul>
                        <li>
                          <img src={Img01} />
                        </li>
                        <li>
                          <img src={Img02} />
                        </li>
                        <li>
                          <img src={Img03} />
                        </li>
                        <li>
                          <img src={Img04} />
                        </li>
                        <li>
                          <img src={Img05} />
                        </li>
                        <li>
                          <img src={Img06} />
                        </li>
                        <li>
                          <img src={Img07} />
                        </li>
                        <li>
                          <img src={Img08} />
                        </li>
                        <li>
                          <img src={Img09} />
                        </li>
                        <li className="two_width">
                          <img src={Img10} />
                        </li>
                        <li>
                          <img src={Img11} />
                        </li>
                        <li>
                          <img src={Img12} />
                        </li>
                        <li className="two_width">
                          <img src={Img13} />
                        </li>
                        <li>
                          <img src={Img14} />
                        </li>
                        <li>
                          <img src={Img15} />
                        </li>
                        <li>
                          <img src={Img16} />
                        </li>
                        <li>
                          <img src={Img17} />
                        </li>
                        <li className="two_width">
                          <img src={Img18} />
                        </li>
                        <li>
                          <img src={Img19} />
                        </li>
                        <li className="">
                          <img src={Img20} />
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
                <h5
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-easing="ease-in-sine"
                  data-aos-once="true"
                  data-aos-duration="500"
                  dangerouslySetInnerHTML={createMarkup(
                    pagedata.products.fline
                  )}
                ></h5>
                {/* <div className='mbtns'>
                      <ul>
                        <li><a href='#'>Warranty Manual</a></li>
                        <li><a href='#'>Installation Manual</a></li>
                        <li><a href='#'>Cleaning Manual</a></li>
                      </ul>
                    </div> */}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <Footer />
    </>
  );
};
