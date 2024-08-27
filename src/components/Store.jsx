import React, { useEffect } from 'react';
import Card from './Card';
import './Store.css';
import { addData, addToDetails } from '../feature/martSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const shirts = [
  {
      id: 1,
      name: "Classic White Shirt",
      price: 299,
      currency: "INR",
      quantity: 5,
      description: "A classic white shirt made of 100% cotton, perfect for formal and casual wear.",
      size: ["S","M","L","XL", "XXL"],
      color: ["White", "Red", "Green"],
      imageUrl1: [
          "banner4.jpg"
      ],
      inStock: true,
      count: 0
  },
  {
      id: 2,
      name: "Slim Fit Denim Shirt",
      price: 399,
      currency: "INR",
      quantity: 8,
      description: "A stylish denim shirt with a slim fit, great for casual outings.",
      size: ["S","M","L","XL", "XXL"],
      color: ["Black", "White", "Gray", "Red"],
      imageUrl1: ["banner3.jpg"],
      inStock: true,
      count: 0
  },
  {
      id: 3,
      name: "Plaid Flannel Shirt",
      price: 249,
      currency: "INR",
      quantity: 12,
      description: "A warm flannel shirt with a classic plaid pattern, ideal for chilly days.",
      size: ["S","M","L","XL", "XXL"],
      color: ["Beige", "Light Blue", "Mint Green", "Coral"],
      imageUrl1: ["item1.jpg"],
      inStock: true,
      count: 0
  },
  {
      id: 4,
      name: "Linen Casual Shirt",
      price: 349,
      currency: "INR",
      quantity: 10,
      description: "A breathable linen shirt that is perfect for warm weather.",
      size: ["S","M","L","XL", "XXL"],
      color: ["Red", "Green", "Navy", "Brown"],
      imageUrl1: [" item2.jpg"],
      inStock: false,
      count: 0
  },
  {
      id: 5,
      name: "Graphic Tee",
      price: 199,
      currency: "INR",
      quantity: 20,
      description: "A cool graphic tee featuring a modern design, suitable for everyday wear.",
      size: ["S","M","L","XL", "XXL"],
      color: ["Black", "White", "Gray", "Red"],
      imageUrl1: ["item3.jpg"],
      inStock: true,
      count: 0
  }
];

const Store = () => {
  const dispatch = useDispatch();
 const navigate = useNavigate()
  useEffect(() => {
    dispatch(addData(shirts));
  }, [dispatch]);

  const handleClick = (shirt) =>{
    navigate('/Details', {state:{shirt:shirt}})

  }

  return (
    <div className='main_div' >
      {shirts.map((shirt) => (
        <Card key={shirt.id} shirt={shirt} handleClick={ handleClick}/>
      ))}
    </div>
  );
};

export default Store;
