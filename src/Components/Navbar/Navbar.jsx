import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { motion } from 'framer-motion'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <motion.div className="Navbar"
     initial={{y:-100}}
     animate={{y:0,transition:{duration:0.4,type:"spring",stiffness:80}}}
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