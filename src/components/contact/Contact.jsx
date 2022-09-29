import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';

const Contact = ({innerRef}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aojm8du', 'template_xkszpar', form.current, '_jfSETgltCkABBCmX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id='contact' ref={innerRef}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>sameera234madusanka@gmail.com</h5>
            <a href="mailto:sameera234madusanka@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>sameera madusanka</h5>
            <a href="https://m.me/sameera.madusanka.35977" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+94 71 643 9431</h5>
            <a href="https://wa.me/+94716439431" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required/>
          <input type="text" name='email'placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact