import {useRef,React }from 'react'
import "./Newsletter.scss"
import { motion,useScroll } from 'framer-motion'
const Newsletter = () => {
  const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:"ref",
        offset:["0 1","1 1"]
    });
  return (<div className="nlbg"><motion.div ref={ref} style={{opacity:scrollYProgress,scale:scrollYProgress}}   className="newletter">
<h2>Get Exclusive Offers On Your Email</h2>
<p>Subscribe to our newsletter and stay updated</p>
<div className='newsletterinput'>
    <input type="email" name="" id="" placeholder="enter your email..." />
    <button>Subscribe</button>
</div>

    </motion.div>
    </div>
  )
}

export default Newsletter