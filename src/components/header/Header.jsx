import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/dp-6.png'

const Header = ({innerRef}) => {
  return (
    <header id='header' ref={innerRef}>
      <div className="container header_container">
        <h5>HI THERE I'M</h5>
        <h1>SAMEERA MADUSANKA</h1>
        <h5 className="text-light">FRONTEND ENGINEER</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header