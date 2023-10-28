import React from 'react'
import "./item.css"
import { useRef } from 'react'
import { motion,useScroll} from 'framer-motion'
const Item = (props) => {
  const ref=useRef(null)
 const {scrollYProgress}=useScroll({
      target:"ref",
      offset:["0 1","0.5 1"]
 });
  return (<div  className="pageforitem" >
    <motion.div ref={ref} style={{scale:scrollYProgress}} className="item" >
        <img className="imgstuff" src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="itemprice">
        <div className="itemnewprice">
            ${props.newprice}
        </div>
        <div className="olditemprice">
            ${props.oldprice}
        </div>
        </div>
    </motion.div>
    </div>
  )
}

export default Item