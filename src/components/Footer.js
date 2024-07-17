import React from "react";
import Follow from "../images/follow.png";
import Call from "../images/call.png";
import Email from "../images/email.png";
// import Address from '../images/location.png'
import ftrlogo from "../images/ftrlogo.png";
import Linkedin from "../images/linkedin.png";
import Twitter from "../images/twitter.png";
// import Instagram from '../images/instagram.png'
import Facebook from "../images/facebook.png";
import Youtube from "../images/youtube.png";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="p-0">
        <div
          className="footer pb-4"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-12">
              <div className="ftrlogo">
                  <img src={ftrlogo} alt="premier energies" />
                </div>
              </div>
              <div className="col-lg-8 col-12">
                     <div className="colSocialmedia">
                     <div className="socialdesp w-auto m-0">
                      <h5 className="m-0">follow us</h5>
                      </div>
                     <ul className="socialmedia">
                     
                          <li>
                            <a
                              href="https://www.linkedin.com/company/premierenergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Linkedin} alt="premier linkedin" />
                             
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/PremierEnergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Twitter} alt="premier twitter" />
                           
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/premierenergies/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Facebook} alt="premier facebook" />
                            
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCCeUifwpZ_OTqqggsw1notA"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img src={Youtube} alt="premier youtube" />
                            
                            </a>
                          </li>
                        </ul>
                     </div>
              </div>
              
        </div>
            <div className="social full-band col-12 float-start">
           
                      <div className="socialdesp">
                        <h6>INDIA</h6>
                        <ul className="newaddress col-12 float-start">
                          <li>
                              <h5>Premier Energies<br/> Limited</h5>
                            
                              <p>
                                <strong className="text-white">Corporate Office</strong> 8<sup>th</sup>
                                floor, Orbit Tower 1, Sy. No. 83/1, Hyderabad
                                Knowledge City, TSIIC, Raidurgam, Hyderabad-
                                500081, Telangana, India.
                              </p>
                              <p>
                                <strong className="text-white">Factory Address</strong> Sy.No.53,
                                Annaram Village, Gummadidala – Mandal,
                                Sangareddy District – 502313, Telangana, India.
                              </p>
                            
                          </li>
                          <li>
                          <h5>PEPPL - Premier Energies <br />
                          Photovoltaic Private Limited</h5>
                              <p>
                                Plot No. 8/B/1&2, E-City, (Fab City),
                                Maheshwaram Mandal, Raviryala Village, Ranga
                                Reddy District, 501359, Telangana, India.
                              </p>
                          </li>
                          <li>
                            <h5> PEIPL - Premier Energies
                                <br />
                                International Private Limited</h5>
                              <p>
                                Plot No 8/B/1 and 8/B/2, E city, Raviryala
                                Village, Maheshwaram Dispensary, Maheshwaram,
                                Rangareddy, Telangana, 501359.
                              </p>
                          </li>
                          <li> 
                            <h5>  PEGPL - Premier Energies <br /> Global
                            Environment Private Limited</h5>
                              <p>
                                Plot No S-95, S-100, S-101, S-102, S-103, S-104,
                                Maheshwaram mandal, Srinagar Village, Raviryal
                                Industrial Area, FAB city, Rangareddy,
                                Telangana, 501359.
                              </p>
                          </li>
                        </ul>
                        <p className="cinnumber"><span>CIN: U40106TG1995PLC019909</span></p>
                      </div>
                    </div>
              <div className="footerrow">
                <div className="ftrdescp">
                  <div className="sftrrow">
                  </div>
                  <div className="sftrrow d-flex justify-content-between">
                  <div className="sitemapbox">
                      <h5>
                        <NavLink to="/">
                          Home
                        </NavLink>
                      </h5>
                    
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/about-premier-energies">
                          About US
                        </NavLink>
                      </h5>
                      <ul>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#overview">
                            OVERVIEW
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#infrastructure">
                            INFRASTRUCTURE
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-ethos">
                            Ethos
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-journey">
                            Journey
                          </a>
                        </li>
                        <li>
                          <a href="https://premierenergies.com/about-premier-energies#our-leadership">
                            Leadership
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <a href="https://www.premierenergies.com/products/solar-cell">
                          Solar Cell
                        </a>
                      </h5>
                                         </div>
                    <div className="sitemapbox">
                      <h5>
                        <a href="https://www.premierenergies.com/products/solar-module">
                          Solar Module
                        </a>
                      </h5>
                     
                    </div>
                   
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/sustainbility">Sustainbility</NavLink>
                      </h5>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/investor-relations">Investor Relations</NavLink>
                      </h5>
                    </div>
                    <div className="sitemapbox">
                      <h5>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                      </h5>
                      <div className="social">
                      <div className="socialicon">
                       <img src={Call} alt="premier email" />
                     </div>
                     <div className="socialdesp">
                      
                       <ul>
                         <li>
                           <a href="tel:04027744415">+91-40-2774 4415</a>,  <a href="tel:04027744416">+91-40-27744416</a>
                         </li>
                         <li>
                           <a href="tel:09490167793">+91-9490167793</a>
                         </li>
                       </ul>
                     </div>
                   </div>
                   <div className="social">
                     <div className="socialicon">
                       <img src={Email} alt="premier email" />
                     </div>
                     <div className="socialdesp">
                       <ul className="email">
                         <li>
                             <strong>For any media & general queries</strong>
                             <a href="mailto:hello@premierenergies.com">
                               hello@premierenergies.com
                             </a>
                         </li>
                         <li>
                             <strong>For Sales & Marketing queries</strong>
                             <a href="mailto:sales@premierenergies.com">
                               sales@premierenergies.com
                             </a>
                         </li>
                         <li>
                             <strong>For Career Opportunities</strong>
                             <a href="mailto:hr@premierenergies.com">
                               hr@premierenergies.com
                             </a>
                         </li>
                         <li>
                         <strong>For Investor Relations</strong>
                         <a href="mailto:investors@premierenergies.com">
                           investors@premierenergies.com
                         </a>
                     </li>
                         <li>
                      
                         <strong>For Legal queries</strong>
                         <a href="mailto: secretarial@premierenergies.com">secretarial@premierenergies.com</a>
                         <a href="tel:09030994222">+91-9030994222</a>
                    
                     </li>
                       </ul>
                     </div>
                   </div>
                    </div>
                  </div>
                  <div className="copyrights d-flex justify-content-between col-12">
                    <ul className="pull-left">
                     
                      <li>
                        &copy; 2024  All Rights Reserved 
                        <NavLink to="/privacy-policy">
                          Privacy & Cookies Policy
                        </NavLink>
                        <NavLink to="/sitemap">Sitemap</NavLink>
                        <NavLink to="/legal-disclaimer">
                          Legal Disclaimer
                        </NavLink>
                       
                        <NavLink to="/terms-conditions">
                          Terms & Conditions
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="pull-right">
                      <li>
                        <a
                          href="https://www.triverseadvertising.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          design : triverse
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
};
