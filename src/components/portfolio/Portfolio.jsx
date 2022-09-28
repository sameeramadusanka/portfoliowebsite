import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.png'
import IMG2 from '../../assets/project-2.png'
import IMG3 from '../../assets/project-3.jpg'
import IMG4 from '../../assets/project-4.png'
import IMG5 from '../../assets/project-5.png'
import IMG6 from '../../assets/project-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Western Provincial Council Information System',
    github: 'http://www.sciencelandit.net/projects.html',
    demo: 'http://www.sciencelandit.net/projects.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Western Provincial Council Asset Management System',
    github: 'http://www.sciencelandit.net/projects.html',
    demo: 'http://www.sciencelandit.net/projects.html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ERM2F',
    github: 'https://www.ostrio.com/project-services',
    demo: 'https://www.ostrio.com/project-services'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Covid Health Declaration System',
    github: 'https://www.ostrio.com/project-services',
    demo: 'https://www.ostrio.com/project-services'
  },
  {
    id: 5,
    image: IMG5,
    title: 'ELEMENTRY™',
    github: 'https://blackswantechnologies.ai/what-is-element-2/',
    demo: 'https://blackswantechnologies.ai/what-is-element-2/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'ELEMENT™',
    github: 'https://blackswantechnologies.ai/what-is-element-2/',
    demo: 'https://blackswantechnologies.ai/what-is-element-2/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  {/* <a href={github} className='btn' target='_blank'>Github</a> */}
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio