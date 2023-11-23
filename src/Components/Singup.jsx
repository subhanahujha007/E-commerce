import React from 'react'
import "./Singup.scss"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Singup = () => {
  return (
    <div className="su">
         <form >
            <motion.h2 initial={{y:1000}} animate={{y:0,transition:{duration:1,delay:0}}}  >SING UP</motion.h2>
        <motion.input initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:0}}} type="text" required placeholder="USERNAME" />
        <motion.input initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:0.2}}}  type="email" required placeholder="ENTER YOUR EMAIL" />
        <motion.input initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:0.3}}} type="password" required placeholder="PASSWORD" />
        <motion.input initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:0.5}}} type="number"  required  placeholder="PHONE NO" />
        <motion.button initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:0.6}}} >Continue</motion.button>
        <motion.h3 initial={{x:100}} animate={{x:0,transition:{duration:0.35,delay:0.85}}}  >Already a user?</motion.h3>
        <motion.button initial={{x:1000}} animate={{x:0,transition:{duration:0.35,delay:1}}} ><Link to="/login">Log in</Link></motion.button>
        </form>
    </div>
  )
}

export default Singup