import React from 'react'
import { motion } from 'framer-motion'
const NOpage = () => {
  return (
  <motion.div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"
  ,backgroundColor:"pink"}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}}>
    <motion.h1 style={{fontSize:"6rem"}} initial={{skew:0}} animate={{skew:[0,30,0,-30,0,30,0,-30,0],transition:{delay:1,duration:0.51}}} exit={{skew:0}}>OOPS</motion.h1>
      <motion.h1 initial={{x:-1000}} animate={{x:0,transition:{delay:1.5,duration:0.3,type:"spring",stiffness:80}}} style={{fontSize:"4rem"}}>404</motion.h1>
      <motion.h1  initial={{opacity:0}} animate={{opacity:1,transition:{delay
      :1,duration:1}}}style={{fontSize:"6rem"}}>Page Not Found!!</motion.h1>
    </motion.div>
  )
}

export default NOpage