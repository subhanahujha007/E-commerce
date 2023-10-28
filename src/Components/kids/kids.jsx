import React from 'react'
import "./kids.scss"
import Item from "../item"
import { motion} from 'framer-motion'
import data from "./kids"
import Offer from "../Offer.jsx"
const men = () => {
  return (
    <><div className="menspage" >
      
      <h1>Kids Fashion</h1>
      <Offer/>
      <motion.div initial={{scale:0}} animate={{scale:1,transition:{duration:0.5,delay:0.3}}} style={{width:"80%",height:"80%"}}>
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