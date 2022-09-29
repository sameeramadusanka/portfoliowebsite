import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sameera-madusanka/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/sameeramadusanka" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials