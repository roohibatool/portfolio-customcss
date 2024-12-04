import React from 'react'
import "../styles/about.css"
import Heading from "@/app/components/Heading"
const About = () => {
  return (
    <div id='about' className='about-container'>
      <Heading title='INTRODUCTION'/>
        <h2 className='about-heading' data-aos="zoom-in-up">About Me</h2>
        <p className='about-text' data-aos="zoom-in-up">
        I am a web developer with a strong passion for crafting modern, responsive, and engaging websites. With expertise in HTML, CSS, JavaScript, and frameworks like [Insert Frameworks/Technologies You Use], I thrive on solving challenges and creating seamless user experiences. My approach combines creativity, attention to detail, and a commitment to staying updated with the latest industry trends. Whether building from scratch or optimizing existing projects, I aim to deliver solutions that are both functional and visually appealing.
        </p>
      
    </div>
  )
}

export default About
