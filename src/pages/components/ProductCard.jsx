import React from 'react'
import './styles/ProductCard.css'

export default function ProductCard(props) {

    const {name,image,price} = props
  return (
    <div className='product-box'>
        <div className='column'> 
            <img src={image}/>
            <span className='product-title'>
            {name}
            </span>
        </div>
        <span className='add-to-cart'>
            ADD TO CART
        </span>

        <span>
           {price} INR
        </span>
    </div>
  )
}
