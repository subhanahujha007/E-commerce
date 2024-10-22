import React from 'react'
import "./men.scss"

import Item from "../item"
import { motion} from 'framer-motion'
import data from "./menpage"
import Offer from "../Offer.jsx"
const Men = () => {
 
  return (
    <><div className="menspage" >
      
      <h1>MENS FASHION</h1>
      <Offer/>
      <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1,transition:{delay:0.3,duration:0.4,type:"spring",stiffness:70}}} style={{width:"80%",height:"80%"}}>
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

export default Men