import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className=' border-b border-neutral-900 pb-20'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        
        
        
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            
            className='my-4'> VPO- Phalain Kosi Kalan Mathura Uttar Pradesh </motion.p>
            <a 
             href="tel:+ 9368143926" className='my-4'> 9368143926</a> <br />
            <a href="mailto:1662002manish@gmail.com" className='border-b'>1662002manish@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact