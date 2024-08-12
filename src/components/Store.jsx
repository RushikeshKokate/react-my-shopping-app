import React from 'react'
import Card from './Card'
import './Store.css'

const shirts = [
  {
      id: 1,
      name: "Classic White Shirt",
      price: 29.99,
      currency: "USD",
      quantity: 5,
      description: "A classic white shirt made of 100% cotton, perfect for formal and casual wear.",
      size: "M",
      color: "White",
      imageUrl: "https://example.com/image-of-white-shirt.jpg",
      inStock: true
  },
  {
      id: 2,
      name: "Slim Fit Denim Shirt",
      price: 39.99,
      currency: "USD",
      quantity: 8,
      description: "A stylish denim shirt with a slim fit, great for casual outings.",
      size: "L",
      color: "Blue",
      imageUrl: "https://example.com/image-of-denim-shirt.jpg",
      inStock: true
  },
  {
      id: 3,
      name: "Plaid Flannel Shirt",
      price: 24.99,
      currency: "USD",
      quantity: 12,
      description: "A warm flannel shirt with a classic plaid pattern, ideal for chilly days.",
      size: "XL",
      color: "Red",
      imageUrl: "https://example.com/image-of-plaid-shirt.jpg",
      inStock: true
  },
  {
      id: 4,
      name: "Linen Casual Shirt",
      price: 34.99,
      currency: "USD",
      quantity: 10,
      description: "A breathable linen shirt that is perfect for warm weather.",
      size: "M",
      color: "Beige",
      imageUrl: "https://example.com/image-of-linen-shirt.jpg",
      inStock: false
  },
  {
      id: 5,
      name: "Graphic Tee",
      price: 19.99,
      currency: "USD",
      quantity: 20,
      description: "A cool graphic tee featuring a modern design, suitable for everyday wear.",
      size: "S",
      color: "Black",
      imageUrl: "https://example.com/image-of-graphic-tee.jpg",
      inStock: true
  }
];


const Store = () => {
  return (
    <div className='main_div'> 
      {shirts.map((items)=>
      <Card items={items}/>
      )}
      
    </div>
  )
}

export default Store