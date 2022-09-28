import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SAMEERA</a>

      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/sameera.madusanka.35977" target="_blank"><FaFacebookF/></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2022 Sameera Madusanka &#9786;</small>
        <small> Built with <a href="https://reactjs.org/" target="_blank">react.js</a></small>
      </div>
    </footer>
  )
}

export default Footer
