import React, {useState, useRef} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import { useIntersectionObserver } from '@researchgate/react-intersection-observer';

const App = () => {

  const [visibility, setVisibility] = useState('header');

  const handleChange = (entry) => {
    if(entry.intersectionRatio!==0){
      setVisibility(entry.target.id );
      childCompRef.current.showAlert(entry.target.id);
    }
  };

  const childCompRef = useRef()
  const [ref1] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref2] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref3] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref4] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref5] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref6] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref7] = useIntersectionObserver(handleChange, { threshold: 0.5 });
  const [ref8] = useIntersectionObserver(handleChange, { threshold: 1.0 });

  return (
    <>
      {/* <div className='ffff'>{visibility}</div> */}
      <Header innerRef={ref1}/>
      <Nav ref={childCompRef}/>
      <About innerRef={ref2}/>
      <Experience innerRef={ref3}/>
      <Services innerRef={ref4}/>
      <Portfolio  innerRef={ref5}/>
      <Testimonials  innerRef={ref6}/>
      <Contact  innerRef={ref7}/>
      <Footer/>

    </>
  )
}

export default App