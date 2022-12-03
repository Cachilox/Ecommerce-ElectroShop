import React from 'react'

function OrderItem({item}) {
    const {name2, img, price, cant} = item
  return (
    <div className='listItem'>
        <img className='listItem__img' src={img} alt={name2} />
        <div className='listItem__details'>
            <h4>{name2}</h4>
            <span>${price}</span>
            <span>×{cant}</span>
            <b>${price * cant}</b>
        </div>
    </div>
  )
}

export default OrderItem