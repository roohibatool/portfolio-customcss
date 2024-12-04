import React from 'react'
import { IoMenu,IoClose } from "react-icons/io5";
import {useState} from "react"
import "../styles/navbar.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='navbar-container'>
    <div className='navbar'>
        <div className='navbar-brand'>ROOHI BATOOL</div>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className='navbar-link'><a href="#hero">Home</a></li>
        <li className='navbar-link'><a href="#about">About</a></li>
        <li className='navbar-link'><a href="#skills">Skills</a></li>
        <li className='navbar-link'><a href="#contact">Contact</a></li>
      </ul>
      <div className='navbar-menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose size={30}/> :<IoMenu size={30} />}
      </div>
    </div>
    {isMenuOpen && (
      <ul className={`navbar-menu ${isMenuOpen ? 'open': ''}`} >
        <li className='navbar-link'><a href="#hero" onClick={toggleMenu}>Home</a></li> </ul>)}
        {isMenuOpen && (
          <ul className={`navbar-menu ${isMenuOpen ? 'open': ''}`} >
        <li className='navbar-link'><a href="#about" onClick={toggleMenu}>About</a></li> </ul>)}
       {isMenuOpen &&(
        <ul className={`navbar-menu ${isMenuOpen ? 'open': ''}`} >
        <li className='navbar-link'><a href="#skills" onClick={toggleMenu}>Skills</a></li> </ul>)}
      {isMenuOpen &&(
        <ul className={`navbar-menu ${isMenuOpen ? 'open': ''}`} >
        <li className='navbar-link'><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>)};
    </div>
  )
}
    export default Navbar