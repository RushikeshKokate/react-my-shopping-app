import React, { useState } from 'react';
import './Card.css'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../feature/martSlice';

const Card = ({ shirt , handleClick}) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    // const handleAdd = (shirt) => {
    //     const itemToAdd = { ...shirt, quantity: count };
    //     dispatch(addToCart(itemToAdd)); 
    // };

    // const Additem = (item) => {
    //     if (count < item) {
    //         setCount(count + 1);
    //     }
    // };

    // const Minusitem = () => {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // };

    return (
        <div className="cardh1" onClick={()=>handleClick(shirt)}>
            <div key={shirt.id}>
                <div className="img-div">
                        <img   src={shirt.imageUrl1[0]}   className="img" />
                </div>
                <h2 className="item-name">Name: {shirt.name}</h2>
                <h3 className="item-price12">Price: {shirt.price} Rs.</h3>
                <h4 className="item-quantity">Quantity: Only {shirt.quantity} Left</h4>
            </div>
        </div>
    );
};

export default Card;
