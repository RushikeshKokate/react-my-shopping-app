import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../feature/martSlice";
import { addToWish } from "../feature/wishlistSlice";

const Details = () => {
  const [color, setColor] = useState("");
  const location = useLocation();
  const shirt = location.state.shirt;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const [isSize, setIsSize] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [image, setImage] = useState("");

  const handleAdd = (shirt) => {
    console.log("here is shirt ", shirt);
    const itemToAdd = { ...shirt, quantity: count, color: color, size: isSize };

    dispatch(addToCart(itemToAdd));
    alert("succesfully added to cart");
  };

  const addItem = (item) => {
    if (count < item) {
      setCount(count + 1);
    }
  };

  const minusItem = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleColor = (col) => {
    setColor(col);
  };

  const handleSize = (sizes) => {
    console.log(sizes);

    setIsSize(sizes);
  };

  if (!shirt) {
    return <div>No details available.</div>;
  }

  const handleWishlist = (shirt) => {
    const itemToAdd = { ...shirt, quantity: count, color: color, size: isSize };
    dispatch(addToWish(itemToAdd));
  };
   
  const handleImage = (index) => {
    const newImage = shirt.imageUrl1.filter((_, id) => index === id);
    setImage(newImage);
  };

  return (
    <div className="details">
      <div key={shirt.id} className="imgdiv">
        <img src={image.length > 0 ? image : shirt.imageUrl1[0] } alt={shirt.name} className="img-tag" />
        <div>
         {shirt.imageUrl1.map((url, index) => (
        <img
         key={index}
          src={url}
          className="img-tag"
          style={{ height: "25%", width: "25%", margin: "10px" }}
          onClick={() => handleImage(index)}
        />
    ))}
        </div>
      </div>
      <div>
        <h1>{shirt.name}</h1>

        <button
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
          onClick={() => handleWishlist(shirt)}
        >
          <img
            src="./wishlist-star.svg"
            alt="wishlist"
            style={{ height: "20px", width: "20px" }}
          />
          Add to Wishlist
        </button>

        <h2>Price: {shirt.price} Rs</h2>
        <h3>Quantity: {shirt.quantity}</h3>
        <div className="quantity-control">
          <button onClick={() => addItem(shirt.quantity)}>+</button>
          {count}
          <button onClick={minusItem}>-</button>
        </div>
        <h5 className="item-description">{shirt.description}</h5>
        <div className="color-box">
          {shirt.color.map((col, index) => (
            <>
              <div
                key={index}
                style={{
                  background: col,
                  border: color === col ? "2px solid black" : "none",
                }}
                className="color"
                onClick={() => handleColor(col)}
              />
            </>
          ))}
          <h5>{color}</h5>
        </div>
        <div className="color-box">
          {shirt.size.map((sizes, index) => (
            <h5
              className="color"
              key={index}
              style={{
                background: sizes,
                border: color === sizes ? "2px solid black" : "none",
              }}
              onClick={() => handleSize(sizes)}
            >
              {sizes}
            </h5>
          ))}
        </div>
        <h3> Selected Size :- {isSize}</h3>
        <button className="add-button" onClick={() => handleAdd(shirt)}>
          Add to Cart ({count})
        </button>
      </div>
    </div>
  );
};

export default Details;
