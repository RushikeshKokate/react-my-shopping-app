import React from 'react';
import { useSelector } from 'react-redux';
import './Wishlist.css';   
import { removeFromWish } from '../feature/wishlistSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Wishlist = () => {
    const dispatch = useDispatch()
    const WishlistItem = useSelector((state) => state.wish.Wishlists);
  
 const handleRemove=(id)=>{
    dispatch(removeFromWish(id))
 }

  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {WishlistItem.length > 0 ? ( WishlistItem.map((item) => (
        <div key={item.id} className="wishlist-item">
          <img src={item.imageUrl1} alt={item.name} />
          <div className="wishlist-item-details">
            <h3>{item.name}</h3>
            <p>{item.color}</p>
            <p className="price">${item.price}</p>
            <p>{item.description}</p>
            <p className="quantity">Quantity: {item.quantity}</p>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))):(
        <div className="wishlist-item">
          Add items to Wishlist
          <h3><Link style={{textDecoration:"none",}} to='/Store'>Go to Store</Link></h3>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
