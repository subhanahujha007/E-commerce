import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"
import { motion } from 'framer-motion'
import {FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi"
const Footer = () => {
  return (
    <motion.div whileInView={{opacity:1,transition:{duration:0.5}}} initial={{opacity:0}} className="footer" style={{backgroundColor:"black",color:"white"}}>
      <div className="footer-logo">SJ</div>
      <div className="footer-links">
        <Link>Company</Link>
        <Link>Products</Link>
        <Link>About</Link>
        <Link>Offices</Link>
      </div>
      <div className="footer-socails">
    <FiGithub/>
    <FiInstagram/>
    <FiLinkedin/>
      </div>
      <div className="footer-cprt">All Rights Reserved </div>
    </motion.div>
  )
}

export default Footer