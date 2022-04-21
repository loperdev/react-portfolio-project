import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_psuao89', 'template_gobonsw', form.current, 'Rj5bVWxMQKmR5ksin')
    e.target.reset()
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__options-icon' />
            <h4>Email</h4>
            <h5>devvyaas04@gmail.com</h5>
            <a href="mailto:devvyaas04@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__options-icon' />
            <h4>Messenger</h4>
            <h5>dev vyas</h5>
            <a href="https://m.me/dev.vyas.568" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__options-icon' />
            <h4>Whatsapp</h4>
            <h5>+441234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=+447915281765" target="_blank">Send a message</a>
          </article>
        </div>
        {/* ===========End of Contact============ */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section >
  )
}

export default Contact
