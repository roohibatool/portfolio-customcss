import React from 'react'
import "../styles/skills.css"
import Heading from "@/app/components/Heading"
const Skills = () => {
  return (
    <div id='skills'  className='skills-container'>
        <Heading title='SKILLS'/>
        <div className='skills-grid'>
            <div data-aos="zoom-in-up" className='skills-left'>
                <h2 className='skills-heading' >Technologies I work with</h2>
                <p className='skills-text'>As a passionate and dedicated new web developer, I specialize in creating clean, responsive, and user-friendly websites. With a solid foundation in HTML, CSS, JavaScript, and modern frameworks, I enjoy solving problems and bringing ideas to life through code. I'm eager to collaborate, continuously learn, and contribute to innovative projects that make a meaningful impact online.</p>
            </div>
            <div>
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className="skills-space">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
