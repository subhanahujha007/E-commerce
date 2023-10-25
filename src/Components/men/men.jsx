import React from 'react'
import { useRef } from 'react'
import "./men.scss"
import Item from "../item"
import { motion,useScroll } from 'framer-motion'
import data from "./menpage"
import Offer from "../Offer.jsx"
const men = (props) => {
  return (
    <><div className="menspage" >
      
      <h1>MENS FASHION</h1>
      <Offer/>
      <motion.div initial={{scale:0}} animate={{scale:1,transition:{duration:0.5,delay:0.3}}} className="mensclothes" style={{width:"80%",height:"80%"}}>
        {data.map((item,i)=>{
          return(
              <Item key={i} id={item.id} image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} />
          )
        })
      }
        {data.map((item,i)=>{
          return(
              <Item key={i} id={item.id} image={item.image} oldprice={item.old_price} newprice={item.new_price} name={item.name} />
          )
        })
      }
        </motion.div>
    </div></>
  )
}

export default men