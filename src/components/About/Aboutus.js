import React from 'react'
import Container from '../Container/Index'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
   <>
    <Container>
            <div className='web-container'>
            <div className="aboutcont col-lg-9 m-auto col-12 text-center">
                            
                            <div className="title">                           
                              <span>About Us</span>
                              <h1 className='heading1 mb-3'> PREMIER ENERGIES LET’S GO SOLAR</h1>
                              <p>
                                Offering sustainable energy solutions for over 29 years,
                                Premier Energies is the India’s 2nd largest integrated
                                solar cell and module manufacturer in India as of March
                                31, 2024 (as per the F&S Report). Backed by GEF Capital,
                                Washington DC based Global Environment Fund, Premier
                                Energies is at the forefront of innovative technology,
                                crafting photovoltaic products and solutions for
                                projects of all sizes.
                              </p>
                            </div>
                             
                              <div className="col-12 float-start d-flex justify-content-center">
                              <Link className="btn-4" to="/about-premier-energies">
                                <span>Read More</span>
                              </Link>
                              </div>
                            </div>
            </div>
    </Container>
   </>
  )
}

export default Aboutus