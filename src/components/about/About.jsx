import React from "react";
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>

      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="About Image" />
         </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>250+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Compeleted</small>
            </article>
          </div>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nisi excepturi quas quasi
            veritatis! Expedita voluptas quas consequatur veritatis eius quidem ut, ratione recusandae, quasi illum
            aspernatur doloribus voluptate sint!
          </p>

          <a href="#contact" className="btn btn-primary">Lets Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About
