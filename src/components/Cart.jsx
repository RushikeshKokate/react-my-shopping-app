import React from 'react'
import './Store.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../feature/martSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const Carts = useSelector((state)=>state.Cart.Carts);

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };
  return (
    <div className='main_div'> 
    {Carts.length > 0 ? (Carts.map((item) => (
                <div key={item.id} className="card">
                    <h2 className="item-name">Name: {item.name}</h2>
                    <h3 className="item-price">Price: ${item.price}</h3>
                    <h4 className="item-quantity">Quantity: {item.quantity}</h4>
                    <h5 className="item-description">{item.description}</h5>
                    <button className="add-button" onClick={() => handleRemove(item.id)}>
                        Remove from Cart
                    </button>
                </div>
            ))):(
                <h1>Add items</h1>
            )}
    </div>
  )
}

export default Cart