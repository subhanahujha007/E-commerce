import React from 'react'
import data from './mendata'
import Item from './item'
const popular = () => {
  return (
    <div  className='popular'>
    <h1 style={{marginLeft:500,fontSize:"50px"}}>POPULAR IN MEN</h1>
    <hr />
<div className="popular-items" style={{display:"flex",justifyContent:"space-between",padding:" 10px 0px 0px 10px "}}>
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

export default popular