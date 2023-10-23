import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"
import {FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi"
const Footer = () => {
  return (
    <div className="footer" style={{backgroundColor:"black",color:"white"}}>
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
    </div>
  )
}

export default Footer