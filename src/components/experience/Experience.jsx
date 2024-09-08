import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaReact, FaAngular, FaHtml5, FaPython, FaNode} from 'react-icons/fa'
import {DiCss3, DiJavascript} from 'react-icons/di'
import {SiDotnet, SiCsharp, SiPhp} from 'react-icons/si'
// import {BsPatchCheckFill} from 'react-icons/bs'

const frontend_skills = [
  {
    name:'Angular', level: 'Advanced', icon: <FaAngular/>
  },
  {
    name:'React', level: 'Advanced', icon: <FaReact/>
  },
  {
    name:'Javascript', level: 'Advanced', icon: <DiJavascript/>
  },
  {
    name:'HTML5', level: 'Advanced', icon: <FaHtml5/>
  },
  {
    name:'CSS', level: 'Advanced', icon: <DiCss3/>
  }
]

const backend_skills = [
  {
    name:'ASP.NET', level: 'Advanced', icon: <SiDotnet/>
  },
  {
    name:'C#', level: 'Advanced', icon: <SiCsharp/>
  },
  {
    name:'Node.js', level: 'Advanced', icon: <FaNode/>
  },
  {
    name:'PHP', level: 'Advanced', icon: <SiPhp/>
  }
]

const Experience = ({ innerRef }) => {
  return (
    <section id='experience' ref={innerRef}>
      <h5>What I Do My Best</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {
              frontend_skills.map(({name,level,icon}, index)=>{
                return(
                  <article key={index} className='experience_details'>
                    <div className='experience_details-icon'>{icon}</div>
                    <div>
                      <h4>{name}</h4>
                      <small className='text_light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">

            {
              backend_skills.map(({name,level,icon},index)=>{
                return(
                  <article key={index} className='experience_details'>
                    <div className='experience_details-icon'>{icon}</div>
                    <div>
                      <h4>{name}</h4>
                      <small className='text_light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience