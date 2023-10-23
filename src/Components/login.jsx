import React from 'react'
import "./login.scss"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
const login = () => {
    const handle=(e)=>{
        e.preventDefault();
        alert("hello")
    }
  return (
    <div>
        <motion.form initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.5}}}>
            <motion.h2 initial={{y:0}} animate={{y:[10,0,-10,0],transition:{delay:0.4,duration:0.3}}}>LOG IN</motion.h2>
        <motion.input initial={{x:-1000}} animate={{x:0,transition:{delay:1,duration:0.4}}} type="text"  placeholder="username" className="name"/>
        <motion.input initial={{x:1000}} animate={{x:0,transition:{delay:1,duration:0.4}}} type="password" placeholder="password"  />
        <motion.h3 initial={{y:700}} animate={{y:0,transition:{delay:0.9,duration:0.4}}}>New user?</motion.h3>
        <motion.button initial={{skew:0}} animate={{skew:[25,-25,0],transition:{delay:0.6,duration:0.3}}} ><Link to="/signup">SING UP</Link></motion.button>
        </motion.form>
    </div>
  )}
  export default login 