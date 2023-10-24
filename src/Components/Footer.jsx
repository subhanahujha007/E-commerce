import {React,useRef} from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"
import { motion ,useInView} from 'framer-motion'
import {FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi"
import { useEffect } from 'react'
const Footer = () => {
const ref=useRef(null);
const isInview=useInView(ref,{once:true});
useEffect(() => {
  console.log(isInview)
}, [isInview])

  return (
    <motion.div ref={ref} style={{background:isInview?"black":"pink",transition:"1s background",color:'white'}} className="footer" >
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