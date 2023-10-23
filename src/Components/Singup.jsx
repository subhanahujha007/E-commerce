import React from 'react'
import "./Singup.scss"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Singup = () => {
  return (
    <div className="su">
         <form >
            <h2>SING UP</h2>
        <input type="text"  placeholder="USERNAME" />
        <input type="email" placeholder="ENTER YOUR EMAIL" />
        <input type="text" placeholder="PASSWORD" />
        <input type="number" placeholder="PHONE NO" />
        <h3>Already a user?</h3>
        <button><Link to="/login">Log in</Link></button>
        </form>
    </div>
  )
}

export default Singup