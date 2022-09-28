import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What Can I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Responsibilities</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Development of new features and changing of existing services.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Writing REST API calls and microservices, deployment tasks, error
handling and validation.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Unit testing, deploying and reviewing of code and researching new
developments.
</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Following agile methodologies and completing tasks within the
Sprint</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Modifying the existing functionalities and upgrading the
application.
</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Achieving team goals via collaboration and individual
performance</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Facilitated customization of systems by encouraging software
engineering team to adopt emerging standards for software
application development architecture and tools.
</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Progress reporting to the team leads and managers.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services