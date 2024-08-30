import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../feature/martSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
 


const Cart = ({user}) => {
    const dispatch = useDispatch()
    const Carts = useSelector((state)=>state.Cart.Carts);
    const [open, setOpen] = useState(false)
    const [finalPrice, setFinalPrice] = useState([
    ])
    const [coupen, setCoupen] = useState('')
    const [applied, setApplied] = useState(0)
    const [deliveryCharge, setDeliveryCharge] = useState(60)
    const [trigger, setTrigger] = useState()  
    const [resetCart, setResetCart] = useState([])

 
    
    const navigate = useNavigate()
    
    const handleRemove = (id) => {
        setTrigger(id)
        dispatch(removeFromCart(id));
  
    };

 

       useEffect(() => {
        const finalPriceOfAll = Carts.filter((item) => item.name && item.quantity > 0)
                                     .map((item) => item.price * item.quantity);

        const arr = finalPriceOfAll.reduce((acc, curr) => acc + curr, 0);
        const gst = arr * 18 / 100;
        const final = arr + gst;

        setFinalPrice(final.toFixed(2));
    }, [Carts, trigger]);
   
    const paypath=()=>{
      const dataToPass = applied ? applied : finalPrice;
       setResetCart([])
       if(user){
        navigate('/ProccedToPay', { state: { price: dataToPass } });
      dispatch(addToCart(resetCart))
       }
      else{
        alert('please Login')
         navigate('/Login')
         
      }
    }
 
    
    const handleCoupen = () =>{
      if(coupen === "Rushi10"){
        const discountedPrice = finalPrice -  (10/100 * finalPrice)
           setApplied(discountedPrice.toFixed(2))
           setCoupen('')
      }
      else{
       setApplied(0)
       
      }
    }

    useEffect(()=>{
    handleCoupen()
    },[trigger])


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
                   
                   
                    <button  onClick={() => handleRemove(item.id)}>
                        Remove from Cart
                    </button>
                    
                    </div>
                </div>
                ))
               ):(
                <div className='card1'>
                <button className='add-button6'><Link to='/Store' style={{textDecoration:"none", color:"white"}}>Add Items From Store</Link></button>
                </div>
            )}

            <div className="card1">{ Carts.filter(items =>  items.name && items.quantity > 0 ) &&
                <div>
                    <h2>Price details</h2>
                    <h4>Price : {finalPrice} Rs</h4>
                    <h4 style={{ color: applied ? 'green' : 'black' }}>{applied ? "Discounted Price":" Final Price"} : {applied  ? applied: finalPrice} Rs</h4>
                    <h5 className={applied ? 'gray' : 'apply-coupon'}   onClick={()=>setOpen(!open)}>Apply Coupon to get 10% off</h5>
                    <h5>Coupen Code: Rushi10</h5>
                    <h5>Delivery : {finalPrice > 500 ? "Free Delivery" : "60 Delivery Charges"} </h5>
                    {open &&
                    <>
                    <input className= 'apply-coupon-input' placeholder='apply coupen code to get 10% discount' value={coupen} onChange={(e)=>setCoupen(e.target.value)}></input>
                    <button onClick={()=>setOpen(!open)}>Cancel</button>
                    <button onClick={handleCoupen}>Apply Coupen</button>
                   
                    </>
                    }
                     <button className="add-button6" onClick={paypath}>
                      Procced to pay {applied ? applied : finalPrice} Rs
                    </button>
              </div>}
            
          </div>
    </div>
  )
}

export default Cart