import React from 'react';
import './Card.css'; // Import the CSS file
import { useDispatch } from 'react-redux';
import  {addToCart} from '../feature/martSlice'

const Card = ({ items }) => {
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addToCart(item)); // Use dispatch to add item to cart
    }

    return (
        <div className="card">
            <li key={items.id}>
                <h2 className="item-name">Name: {items.name}</h2>
                <h3 className="item-price">Price: ${items.price}</h3>
                <h4 className="item-quantity">Quantity: {items.quantity}</h4>
                <h5 className="item-description">{items.description}</h5>
                <button className="add-button" onClick={() => handleAdd(items)}>
                    Add to Cart
                </button>
            </li>
        </div>
    );
};

export default Card;