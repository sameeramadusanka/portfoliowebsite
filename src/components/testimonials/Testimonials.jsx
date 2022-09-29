import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/hashini.jpg'
import AVTR2 from '../../assets/isuru.jpg'
import AVTR3 from '../../assets/chinthaka.jpg'
import AVTR4 from '../../assets/chamindu.jpg'
import AVTR5 from '../../assets/ruwanga.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    id:1,
    avatar: AVTR3,
    name: 'Chinthaka Maduranga',
    review: 'Sameera is such a wonderful and hard working person.. anything that he does comes out a million times better.. thank you for al of your fantastic work..'
  },
  {
    id:2,
    avatar: AVTR4,
    name: 'Chamindu Jayarathne',
    review: 'Sameera always does a fabulous job ! I highly recommend him for any job.. Thank you again!!'
  },
  {
    id:3,
    avatar: AVTR2,
    name: 'Isuru Piumal',
    review: 'Sameera definitely has the skills to get any job done, I will keep using his services and will highly recommend him.. thank you again my friend for all that you do !!'
  },
  {
    id:4,
    avatar: AVTR5,
    name: 'Ruwanga Thathsarani',
    review: 'Sameera did a great job and is very nice to work with! I would recommend him.'
  },
  {
    id:5,
    avatar: AVTR1,
    name: 'Hashini Yuresha',
    review: 'Sameera always comes thru and fixes everything right the first time..'
  }
]

const Testimonials = ({innerRef}) => {
  return (
    <section id='testimonials' ref={innerRef}>
      <h5>Reviews from clients and Collegues</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonials_container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id,avatar,name,review})=>{
            return(
                <SwiperSlide key={id} className="testimonial">
                  <div className="client_avatar">
                    <img src={avatar} alt="Avatar 1" />
                  </div>
                  <div className='client_details'>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>
                      {review}
                    </small>
                  </div>
                </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials