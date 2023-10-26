import React from 'react'
import Offer from "../Offer"
import { motion } from 'framer-motion'
import "./women.scss"
import datawomen from "./women.js"
import Item from "../item"
const Women = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.7}}} className="womenpage">
        <h1>WOMENS FASHION</h1>
        <Offer/>
        <motion.div initial={{scale:0}} animate={{scale:1,transition:{duration:0.5,delay:0.3}}} style={{width:"80%",height:"80%"}} >
        {datawomen.map((item,i)=>{
          return(
              <Item key={i} id={item.id} image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} />
          )
        })
      }
      {datawomen.map((item,i)=>{
          return(
              <Item key={i} id={item.id} image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} />
          )
        })
      }
        
      
        </motion.div>
    </motion.div>
  )
}

export default Women