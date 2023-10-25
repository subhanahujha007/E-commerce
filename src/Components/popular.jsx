import {useRef,React} from 'react'
import data from "./men/mendata"
import Item from './item'
import {motion,useScroll} from "framer-motion"
const Popular = () => {
  const ref=useRef(null);
  const {scrollYProgress}=useScroll({
    target:"ref",
    offset:["0 0","0.6 1"]
  });
  return (
    <div  className='popular'>
    <motion.h1  style={{marginLeft:500,opacity:scrollYProgress}} ref={ref} >POPULAR IN MEN</motion.h1>
    <hr />
<div className="popular-items"   style={{display:"flex",justifyContent:"space-between",padding:" 10px 0px 0px 10px "}}>
    {
        data.map((item,i)=>{
          return(
            <Item key={i}  id={item.id} name={item.name} image={item.image} newprice={item.new_price} oldprice={item.old_price} />
        )})
    }
    
</div>
    </div>
  )
}

export default Popular