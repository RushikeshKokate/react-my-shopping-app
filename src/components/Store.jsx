import React, { useEffect } from "react";
import Card from "./Card";
import "./Store.css";
import { useState } from "react";
import { addData, addToDetails } from "../feature/martSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWish } from "../feature/wishlistSlice";
import Filter from "./Filter";
import { IoFilterSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const shirts = [
  {
    id: 1,
    name: "Solid Tencel Slim Fit Men's Casual Shirt",
    price: 299,
    currency: "INR",
    quantity: 5,
    description:
      "A classic white shirt made of 100% cotton, perfect for formal and casual wear.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["White", "Red", "Green"],
    imageUrl1: ["new1.jpg", "new2.jpg", "new3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 2,
    name: "Solid Cotton Slim Fit Men's Casual Wear Shirt",
    price: 399,
    currency: "INR",
    quantity: 8,
    description:
      "A stylish denim shirt with a slim fit, great for casual outings.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black", "White", "Gray", "Red"],
    imageUrl1: ["a1.jpg", "a2.jpg", "a3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 3,
    name: "Plaid Flannel Shirt",
    price: 249,
    currency: "INR",
    quantity: 12,
    description:
      "A warm flannel shirt with a classic plaid pattern, ideal for chilly days.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Beige", "Light Blue", "Mint Green", "Coral"],
    imageUrl1: ["b1.jpg", "b2.jpg", "b3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 4,
    name: "Linen Casual Shirt",
    price: 349,
    currency: "INR",
    quantity: 10,
    description: "A breathable linen shirt that is perfect for warm weather.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Red", "Green", "Navy", "Brown"],
    imageUrl1: [" c1.jpg", "c2.jpg", "c3.jpg"],
    inStock: false,
    count: 0,
  },
  {
    id: 5,
    name: "Graphic Tee",
    price: 199,
    currency: "INR",
    quantity: 20,
    description:
      "A cool graphic tee featuring a modern design, suitable for everyday wear.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black", "White", "Gray", "Red"],
    imageUrl1: ["d1.jpg", "d2.jpg", "d3.jpg"],
    inStock: true,
    count: 0,
  },

  {
    id: 6,
    name: "Oxford Blue Shirt",
    price: 349,
    currency: "INR",
    quantity: 7,
    description: "An elegant oxford shirt in blue, ideal for both office and casual settings.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue", "White"],
    imageUrl1: ["e1.jpg", "e2.jpg", "e3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 7,
    name: "Black Formal Shirt",
    price: 399,
    currency: "INR",
    quantity: 10,
    description:
      "A sleek black formal shirt, perfect for meetings and formal events.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Black"],
    imageUrl1: [" f1.jpg", "f2.jpg", "f3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 8,
    name: "Printed Hawaiian Shirt",
    price: 299,
    currency: "INR",
    quantity: 15,
    description:
      "A vibrant Hawaiian shirt with a bold print, great for beachwear.",
    size: ["M", "L", "XL"],
    color: ["Multicolor"],
    imageUrl1: ["g1.jpg", "g2.jpg", "g3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 9,
    name: "Grey Chambray Shirt",
    price: 279,
    currency: "INR",
    quantity: 9,
    description:
      "A casual chambray shirt in grey, perfect for a laid-back look.",
    size: ["S", "M", "L", "XL"],
    color: ["Grey", "Light Blue"],
    imageUrl1: ["h1.jpg", "h2.jpg", "h3.jpg"],
    inStock: true,
    count: 0,
  },
  {
    id: 10,
    name: "Pink Dress Shirt",
    price: 359,
    currency: "INR",
    quantity: 6,
    description:
      "A soft pink dress shirt, ideal for both formal and semi-formal occasions.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Pink"],
    imageUrl1: ["i1.jpg", "i2.jpg", "i3.jpg"],
    inStock: true,
    count: 0,
  },
];

const Store = ({ user, childData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filteredShirts, setFilteredShirts] = useState(shirts);
  const [Open, setOpen] = useState(false);
  const [newSearch , setNewSearch] = useState([])
 

  useEffect(() => {
    dispatch(addData(shirts));
  }, [dispatch]);

  let filtered1 = [];
  const handleFilter = (priceFilter) => {
    console.log("in store", priceFilter);

    if (priceFilter.length > 0) {
      for (let i = 0; i < priceFilter.length; i++) {
        for (let j = 0; j < shirts.length; j++) {
          if (shirts[j].price <= priceFilter[i]) {
            if (filtered1.includes(shirts[j])) {
              continue;
            }

            filtered1.push(shirts[j]);
          }
        }
      }

      // Update the filteredShirts state with the accumulated results
      setFilteredShirts(filtered1);
    } else {
      setFilteredShirts(shirts);
    }
  };

  const handleClick = (shirt) => {
    navigate("/Details", { state: { shirt: shirt } });
  };
  console.log(user);

  const extractNameFromEmail = (email) => {
    if (!email) return "User";

    const namePart = email.split("@")[0];

    const nameArray = namePart.split(/(\d+)/)[0].split(/(?=[A-Z])/);

    const formattedName = nameArray
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ");

    return formattedName;
  };

  useEffect(() => {
    if (childData) {
      const filtered = shirts.filter(
        (shirt) =>
          shirt.name.toLowerCase().includes(childData.toLowerCase()) ||
          shirt.description.toLowerCase().includes(childData.toLowerCase()) ||
          shirt.color.some((color) =>
            color.toLowerCase().includes(childData.toLowerCase())
          ) ||
          shirt.size.some((size) =>
            size.toLowerCase().includes(childData.toLowerCase())
          )
      );
      setFilteredShirts(filtered);
    } else {
      setFilteredShirts(shirts);
    }
  }, [childData]);

  useEffect(() => {
    if(newSearch.length > 0){
      const newfiltered = shirts.filter(
        (shirt) =>
          shirt.name.toLowerCase().includes(newSearch.toLowerCase())
      )
      setFilteredShirts(newfiltered)
    }
    else {
      setFilteredShirts(shirts);
    }
  }, [newSearch]);

  const displayName = user?.displayName || extractNameFromEmail(user?.email);

  return (
    <div className="main_div">
      <div className="userName">
        {user ? <h3>Welcome, {displayName} !</h3> : <h2></h2>}
      </div>
      <div className="store_filter">
        <div className="filter_div">
          <IoFilterSharp
            className="filter_icon"
            onClick={() => setOpen(!Open)}
          />
          <div className="search_div">
            <input
              type="text"
              className="input"
              placeholder="search here ..."
              onChange={(e) => setNewSearch(e.target.value)}
            />
          </div>
         
        </div>
      </div>
      <div className="price_filter_div">
        {Open && <Filter handleFilter={handleFilter} />}
      </div>
      

      <div className="Cards-div">
  {filteredShirts.length > 0 ? (
    filteredShirts.map((shirt) => (
      <Card key={shirt.id} shirt={shirt} handleClick={handleClick} />
    ))
  ) : (
    <>Item Not Found</>
  )}
 
</div>

    </div>
  );
};

export default Store;
