import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
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
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente assumenda facilis, dignissimos ducimus non quod consectetur. Architecto ipsa placeat nihil possimus praesentium totam fuga cupiditate corporis incidunt, aperiam, laudantium sed ut rerum perferendis! Illum totam cumque maxime beatae, velit veritatis, voluptatem voluptatibus molestiae iste culpa ea enim molestias itaque.'
  },
  {
    id:2,
    avatar: AVTR4,
    name: 'Chamindu Jayarathne',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente assumenda facilis, dignissimos ducimus non quod consectetur. Architecto ipsa placeat nihil possimus praesentium totam fuga cupiditate corporis incidunt, aperiam, laudantium sed ut rerum perferendis! Illum totam cumque maxime beatae, velit veritatis, voluptatem voluptatibus molestiae iste culpa ea enim molestias itaque.'
  },
  {
    id:3,
    avatar: AVTR2,
    name: 'Isuru Piumal',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente assumenda facilis, dignissimos ducimus non quod consectetur. Architecto ipsa placeat nihil possimus praesentium totam fuga cupiditate corporis incidunt, aperiam, laudantium sed ut rerum perferendis! Illum totam cumque maxime beatae, velit veritatis, voluptatem voluptatibus molestiae iste culpa ea enim molestias itaque.'
  },
  {
    id:4,
    avatar: AVTR5,
    name: 'Ruwanga Thathsarani',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente assumenda facilis, dignissimos ducimus non quod consectetur. Architecto ipsa placeat nihil possimus praesentium totam fuga cupiditate corporis incidunt, aperiam, laudantium sed ut rerum perferendis! Illum totam cumque maxime beatae, velit veritatis, voluptatem voluptatibus molestiae iste culpa ea enim molestias itaque.'
  },
  {
    id:5,
    avatar: AVTR1,
    name: 'Hashini Yuresha',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente assumenda facilis, dignissimos ducimus non quod consectetur. Architecto ipsa placeat nihil possimus praesentium totam fuga cupiditate corporis incidunt, aperiam, laudantium sed ut rerum perferendis! Illum totam cumque maxime beatae, velit veritatis, voluptatem voluptatibus molestiae iste culpa ea enim molestias itaque.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
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