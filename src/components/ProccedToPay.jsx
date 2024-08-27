import React, { useState } from 'react';
import './ProccedToPay.css';
import { Button, RadioGroup, FormControlLabel, Radio, Paper, Typography, Divider, Box } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useLocation } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

const ProccedToPay = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const location = useLocation();
  const { price } = location.state || {};
  const navigate = useNavigate()

  console.log('Price:', price);
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

 
  

  const handlePayment = () => {
    if (selectedPaymentMethod) {
    
      navigate('/PaymentSuccess')
 
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-page">
        <h1>Total Amount : {price}</h1>
      <Paper elevation={3} className="payment-container">
        <Typography variant="h4" className="payment-title">Payment Options</Typography>
        <Divider className="divider"/>

        <RadioGroup
          aria-label="payment method"
          name="paymentMethod"
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
          className="payment-options"
        >
          <FormControlLabel 
            value="Credit Card" 
            control={<Radio />} 
            label={
              <Box display="flex" alignItems="center">
                <CreditCardIcon className="payment-icon"/> Credit Card
              </Box>
            } 
          />
          <FormControlLabel 
            value="Debit Card" 
            control={<Radio />} 
            label={
              <Box display="flex" alignItems="center">
                <CreditCardIcon className="payment-icon"/> Debit Card
              </Box>
            } 
          />
          
          <FormControlLabel 
            value="Net Banking" 
            control={<Radio />} 
            label={
              <Box display="flex" alignItems="center">
                <AccountBalanceIcon className="payment-icon"/> Net Banking
              </Box>
            } 
          />
          <FormControlLabel 
            value="UPI" 
            control={<Radio />} 
            label={
              <Box display="flex" alignItems="center">
                <AccountBalanceWalletIcon className="payment-icon"/> UPI
              </Box>
            } 
          />
          <FormControlLabel 
            value="Cash on Delivery" 
            control={<Radio />} 
            label={
              <Box display="flex" alignItems="center">
                <LocalAtmIcon className="payment-icon"/> Cash on Delivery
              </Box>
            } 
          />
        </RadioGroup>

        <Divider className="divider" />
        <Button variant="contained" color="primary" onClick={handlePayment} className="pay-button">
          Proceed to Pay
        </Button>
      </Paper>
    </div>
  );
};

export default ProccedToPay;
