import React from 'react'
import './about.css'
import ME from '../../assets/dp-3.jpg'
import {FaAward} from 'react-icons/fa'
import {GiFactory} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
          <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about_card'>
              <GiFactory className='about_icon'/>
              <h5>Companies</h5>
              <small>4 Companies</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Commercial Projects</small>
            </article>
          </div>

          <p>
          A graduate of the University of Bedfordshire, who has an
          experience with distinctive mix of IT and Business
          knowledge, seeking a challenging carrier at an established
          and dynamic organization to contribute knowledge, skills
          and experience for the advancement of the organization
          while studying and making myself grow with the industry.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About