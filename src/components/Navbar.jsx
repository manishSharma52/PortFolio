import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";




function Navbar() {
  return (
    <nav className='mb-20 flex item-center justify-between py-2 ' >
      <div className='flex flex-shrink-0 items-center'>
    
        <img className='h-24 w-full ' style={{background:"rgba(0, 0, 0, 0.637);"}} src="https://media.istockphoto.com/id/1325438541/vector/ms-logo-design-initial-gold-sm-letter-logo-design-with-luxury-concept.jpg?s=612x612&w=0&k=20&c=cf4xOvhCC_D7ib9AHk4vfxPArc9fkqk_Qq4EDq48k9k=" alt=" manish sharma" />
      </div>
      <div className='  m-8 flex items-center justify-center gap-6 text-2xl'>
        <a href="https://www.linkedin.com/in/manish-sharma-84bb2824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedinIn/></a>
        <a href="https://github.com/manishSharma52"><FiGithub/></a>
        <a href="https://www.instagram.com/manish.sharma.52/"><FaInstagram/></a>
      </div>
       </nav>
  )
}

export default Navbar