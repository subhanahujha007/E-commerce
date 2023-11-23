import React from 'react'
import { motion } from 'framer-motion'
import "./products.scss"
const products = () => {
  return (
    <div className="fullpage" style={{width:"100%"}}>
    
        <div className="items" style={{width:"100%"}}>
            <li><ul>products</ul>
            <ul>title</ul>
            <ul>quantity</ul>
            <ul>price</ul>
            <ul>total</ul>
            <ul>remove</ul></li>
            <hr />
        </div>
        <div className="rest">
       <div className="total">
        <h3>CART TOTALS</h3>
        <hr />
        <div> Subtotal    :<p>100</p> </div><hr />
        <div>Shipping fee:<p>100</p> </div><hr />
        <div>Total       :<p>200</p> </div><hr />
       </div>
       <div className="promo"><h1>if you have a promo code enter it here</h1>
       <input type="text" placeholder="enter the promo code"/><button>SUBMIT</button></div>
       </div>
       <motion.button whileTap={{scale:0.9}}>PROCEED TO PAYMENTS</motion.button>
    </div>
  )
}

export default products