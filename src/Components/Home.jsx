import React from 'react'
import "./Navbar/Home.scss"
import i from "./Asserts/1.png"
import hello from "./Asserts/images-removebg-preview.png"
import { motion } from 'framer-motion';
import Popular from './popular';
const Home = () => {
  
  return (<div>
    <motion.section initial={{opacity:0}} transition={{duration:1}} animate={{opacity:1}} > 
      <div className="left"> <motion.h2  initial={{x:-600}} animate={{x:200,transition:{duration:0.5,delay:0.4,type:"spring",stiffness:60}}}>DELHI STREETS</motion.h2>
      <motion.h1  >New
         <motion.img initial={{rotate:0}} animate={{rotate:[0,80,0,-40,0,80,0,-40,0],transition:{delay:1,duration:0.7}}} src={hello} alt="noimg" /><br />Collections For Everyone
      </motion.h1>
      <motion.button whileTap={{scale:0.9}} initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,delay:1.2}}} >
        Latest Collections
      </motion.button>
       </div>
      <div className="rigth">
        <motion.img  initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.6,delay:0.6}}} src={i} alt="noimg"></motion.img>
      </div>
    
    </motion.section>
    <Popular/>
</div>
  )
}

export default Home;