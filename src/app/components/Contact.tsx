import React from 'react'
import { MdEmail } from "react-icons/md"
import { BsFillTelephonePlusFill } from "react-icons/bs"
import "../styles/contact.css"
import Heading from "@/app/components/Heading"
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <Heading title='YOU CAN CONTACT ME'/>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="zoom-in-up">Get in touch</h2>
                <p className='contact-text' data-aos="zoom-in-up">
                    Drop me a line,give a call, or send me a message by submitting the form.
                </p>
                <div className='contact-flex' data-aos="zoom-in-up">
                    <MdEmail size={30}/> roohibatool6@gmail.com
                </div>
                <div className='contact-flex' data-aos="zoom-in-up">
                <BsFillTelephonePlusFill size={30}/> (03333******)
    

                </div>
            </div>
            <div className='contact-space'>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='input-field'
                    id='name' />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='input-field'
                    id='email' />
                </div>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='textarea-field'
                    id='msg' rows={8} >
                    </textarea>
                </div>
                <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>  
    </div>
  )
}

export default Contact
