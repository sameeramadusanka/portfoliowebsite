import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsCardList} from 'react-icons/bs'
import {MdOutlineReviews} from 'react-icons/md'
import { useState } from 'react'
import { forwardRef, useImperativeHandle } from "react"

const Nav = forwardRef((props, ref) => {
  const [activeNav, setActiveNav] = useState('#header')
  
  useImperativeHandle(ref, () => ({
    showAlert(val) {
      setActiveNav('#'+val);
    },
  }))
  
  
  return (
    <nav className={activeNav === '#header'? 'hidenav':''}>
      <a href="#header" onClick={()=>{setActiveNav('#header')}} className={activeNav === '#header'? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience'? 'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services'? 'active':''}><BsCardList/></a>
      <a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio'? 'active':''}><RiServiceLine/></a>
      <a href="#testimonials" onClick={()=>{setActiveNav('#testimonials')}} className={activeNav === '#testimonials'? 'active':''}><MdOutlineReviews/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
})

export default Nav