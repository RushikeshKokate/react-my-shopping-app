import React, { useState } from 'react';
import './Filter.css';

const Filter = ({handleFilter}) => {
  const [priceFilter, setPriceFilter] = useState([]);
  const [addToFilter, setAddToFilter] = useState([]);
  const [textChange, setTextChange] = useState('Add Filter');
  const [checkedState, setCheckedState] = useState({
    price1: false,
    price2: false,
    price3: false
  });

  const handleChange = (e) => {
    const value = Number(e.target.value);
    const name = e.target.name;
    const isChecked = e.target.checked;

    // Update checked state for individual checkbox
    setCheckedState((prev) => ({
      ...prev,
      [name]: isChecked
    }));

    if (isChecked) {
      setPriceFilter((prev) => [...prev, value]);
    } else {
      setPriceFilter((prev) => prev.filter((item) => item !== value));
    }

    setTextChange('Add Filter');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddToFilter(priceFilter);
    console.log('Submitted filters:', priceFilter);
    setTextChange('Remove Filter');
    handleFilter(priceFilter);
  };

  const handleRemoveFilter = () => {
    setPriceFilter([]);
    setAddToFilter([]);
    setCheckedState({
      price1: false,
      price2: false,
      price3: false
    });
    setTextChange('Add Filter');
  };

  return (
    <div>
      <form className='form1' action="" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="" className="price_filter_label">
          <input
            type="checkbox"
            name="price1"
            value={200}
            checked={checkedState.price1}
            onChange={handleChange}
            className="price_filter_input"
          />
         
            Price less than 200 -/Rs
          </label>
        </div>
        <div>
          <label htmlFor="" className="price_filter_label">
          <input
            type="checkbox"
            name="price2"
            value={300}
            checked={checkedState.price2}
            onChange={handleChange}
            className="price_filter_input"
          />
          Price less than 300 -/Rs
          </label>
        </div>
        <div>
          <label htmlFor="" className="price_filter_label">
          <input
            type="checkbox"
            name="price3"
            value={400}
            checked={checkedState.price3}
            onChange={handleChange}
            className="price_filter_input"
          />
          Price less than 400 -/Rs
          </label>
        </div>
        <button
          type="submit"
          className='buttonq'
          onClick={textChange === 'Remove Filter' ? handleRemoveFilter : handleSubmit}
        >
          {textChange === 'Remove Filter' ? 'Remove Filter' : 'Apply Filter'}
        </button>
      </form>
    </div>
  );
};

export default Filter;
