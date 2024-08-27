import React from 'react';
import './PaymentSuccess.css';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/Store');
  };

  return (
    <div className="success-page">
      
      <Typography variant="h4" className="success-message">
        Payment Successful!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBackToHome} className="home-button">
        Continue Shopping
      </Button>
    </div>
  );
};

export default PaymentSuccess;
