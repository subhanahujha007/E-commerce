import React from 'react'
import "./item.css"
import { motion } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { useRef} from 'react'
const Item = (props) => {
  const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:"ref",
        offset:["0 1","0.6 1"]
    });
  return (<div   className="pageforitem">
    <motion.div  className="item" ref={ref} style={{scale:scrollYProgress}}>
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