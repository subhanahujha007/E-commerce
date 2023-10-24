import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { motion,useMotionValueEvent,useScroll } from 'framer-motion'
import "./Navbar.scss"
const Navbar = () => {
  const [hidden,sethidden]=useState(false);
  const {scrollY}=useScroll();
  useMotionValueEvent(scrollY,"change",(latest)=>{
    const previous=scrollY.getPrevious();
    if(latest>previous && latest>20){
      sethidden(true);
    }
    else{
      sethidden(false);
    }
  })
  return (
    <motion.div className="Navbar"
        variants={{
          visible:{y:0},
          hidden:{y:"-200%"}
        }}
        animate={hidden?"hidden":"visible"}
        transition={{duration:0.35,ease:"easeInOut"}}
     >
        <div className="logo"><h1>Sj</h1></div>
        <div className="link">
<Link to="/">Home</Link>
<Link to="/men" >Men</Link>
<Link to="/women"  >Women</Link>
<Link to="/kids">Kids</Link>
<Link to="/login">Login</Link>
<Link to="/cart"><FiShoppingCart/></Link>
</div>
    </motion.div>
  )
}

export default Navbar