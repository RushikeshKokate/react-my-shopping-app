import React, { useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../feature/martSlice'


const Cart = () => {
    const dispatch = useDispatch()
    const Carts = useSelector((state)=>state.Cart.Carts);
    console.log("here is  cart", Carts);
    const [open, setOpen] = useState(false)
    

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };
  return (
    <div className=' '> 
    {Carts.length > 0 ? 
       (Carts.filter(items =>  items.name && items.quantity > 0 ).map
                (item =>(<div key={item.id} className="card1">
                    <div className='img-div1'><img src={item.imageUrl1} alt="" className='img2'/></div>
                    <div>
                    <h2 className="item-name2">Name: {item.name }</h2>
                    <h4 className="item-quantity4">Quantity: {item.quantity}</h4>
                    <h5>Color : {item.color}</h5>
                    <h5> single item price {item.price} + GST {(item.price * item.quantity *18/100)} Rs   (18% GST)</h5>
                    <h3 className="item-price3">Final Price: {item.price * item.quantity + (item.price * item.quantity *18/100) } Rs </h3>
                    <h5 className="item-description5">{item.description}</h5>
                    <h5>Size : {item.size}</h5>
                    <h5 className='apply-coupon ' style={{color:"green"}} onClick={()=>setOpen(!open)}>Apply Coupon to get 10% off</h5>
                    {open &&
                    <>
                     <input className='apply-coupon-input' placeholder='apply coupen code to get 10% discount'></input>
                    <button onClick={()=>setOpen(!open)}>Cancel</button>
                    </>
                    }
                    <button  onClick={() => handleRemove(item.id)}>
                        Remove from Cart
                    </button>
                    <button className="add-button6" >
                      Procced to pay
                    </button>
                    </div>
                </div>
                ))
               ):(
                <h1>Add items</h1>
            )}
    </div>
  )
}

export default Cart