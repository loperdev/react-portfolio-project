import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experinece__content">
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>

          {/* End of Frontend */}
          {/* <div className="container experience__container"> */}
            <div className="experience__backend">
              <h3>Backend Development</h3>
              <div className="experinece__content">
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Ruby on Rails</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>SQL</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>PostgreSQL</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Redux</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill />
                  <h4>Git, Github, Heroku</h4>
                  <small className='text-light'>Experienced</small>
                </article>
              </div>
            {/* </div> */}
          </div>
      </div>
    </section>
  )
}

export default Experience
