import React from 'react'
import "./Offer.scss"
import { motion } from 'framer-motion'
import img from "../Components/Asserts/images-removebg-preview (1).png"
const  Offer = () => {
  return (
    <motion.div initial={{x:-1000,scale:0}} animate={{x:0,scale:1,transition:{duration:0.4,type:"spring",stiffness:80}}} className="offerdiv" >
        <div className="text">
        <h1>FLAT 50% OFF <br />EXCITING OFFER </h1>
        <p>ONLY FOR YOU <br />HURRY UP</p>
        <motion.button initial={{skew:0}} animate={{skew:[0,25,0,-25,0,25,0,-25,0],transition:{duration:0.5,delay:0.7}}}>EXPLORE NOW</motion.button></div>
        <img src={img} alt="" className="imageoffer" />
        </motion.div>
  )
}

export default  Offer