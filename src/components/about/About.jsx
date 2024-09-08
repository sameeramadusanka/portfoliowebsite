import React from 'react'
import './about.css'
import ME from '../../assets/dp-3.jpg'
import {FaAward} from 'react-icons/fa'
import {GiFactory} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = ({innerRef}) => {
  return (
    <section id='about' ref={innerRef}>
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
              <small>6+ Years Working</small>
            </article>

            <article className='about_card'>
              <GiFactory className='about_icon'/>
              <h5>Companies</h5>
              <small>5 Companies</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>6+ Commercial Projects</small>
            </article>
          </div>

          <p>
          Results-driven Senior Software Engineer with 6+ years of experience specializing in ASP.NET and C# development. Proven expertise in designing, implementing, and optimizing backend technologies to deliver high-performance applications. Skilled in collaborating with cross-functional teams to define project requirements and deliver innovative software solutions with a focus on code quality, performance, and scalability. Passionate about leveraging emerging technologies to drive business success and enhance user experience.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About