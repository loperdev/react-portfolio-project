import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Niraj',
    review: 'Dev is a really dynamic developer, he was so quick with his idea for our website flow and i must admit that it was a good decision to go with him.  He also trained one of our team members to update the website for  any changes.I Will surely recommend him.'
  },
  {
    avatar: AVTR2,
    name: 'Niraj',
    review: 'Dev is a really dynamic developer, he was so quick with his idea for our website flow and i must admit that it was a good decision to go with him.  He also trained one of our team members to update the website for  any changes.I Will surely recommend him.'
  },
  {
    avatar: AVTR3,
    name: 'Niraj',
    review: 'Dev is a really dynamic developer, he was so quick with his idea for our website flow and i must admit that it was a good decision to go with him.  He also trained one of our team members to update the website for  any changes.I Will surely recommend him.'
  },
  {
    avatar: AVTR4,
    name: 'Niraj',
    review: 'Dev is a really dynamic developer, he was so quick with his idea for our website flow and i must admit that it was a good decision to go with him.  He also trained one of our team members to update the website for  any changes.I Will surely recommend him.'
  }

]


const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonails_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small></SwiperSlide>
            )
          })
        }
        {/* <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
            <h5 className='client__name'>Lorem Ipsum</h5>
            <small className='client__review'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequatur esse eum, ad tempora libero molestiae maiores
             possimus hic! Magni non libero porro quod!
             Pariatur obcaecati, voluptates ex veritatis magni
             dolor!
            </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Lorem Ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur esse eum, ad tempora libero molestiae maiores
            possimus hic! Magni non libero porro quod!
            Pariatur obcaecati, voluptates ex veritatis magni
            dolor!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Lorem Ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur esse eum, ad tempora libero molestiae maiores
            possimus hic! Magni non libero porro quod!
            Pariatur obcaecati, voluptates ex veritatis magni
            dolor!
          </small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Lorem Ipsum</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur esse eum, ad tempora libero molestiae maiores
            possimus hic! Magni non libero porro quod!
            Pariatur obcaecati, voluptates ex veritatis magni
            dolor!
          </small>
        </article> */}


      </Swiper>
    </section >
  )
}

export default Testimonials
