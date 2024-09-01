import React, { useState } from 'react';
import { auth } from '../firebase';  
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';  
import './Signup.css'


const Signup = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        repassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, repassword } = data;

 
        if (password !== repassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User registered:', userCredential.user);
            setSuccess('Account created successfully!');
            navigate('/Store')
            
        } catch (err) {
            console.error(err);
            setError('Failed to create an account. Please try again.');
        }
    };

    return (
        <div>
           
            <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
                <label>
                    Email:
                    <input 
                        type="email" 
                        placeholder="Enter Your email" 
                        name="email" 
                        value={data.email} 
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Password:
                    <input 
                        type="password" 
                        placeholder="Enter Your password" 
                        name="password" 
                        value={data.password} 
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Re-enter Password:
                    <input 
                        type="password" 
                        placeholder="Re-enter Your password" 
                        name="repassword" 
                        value={data.repassword} 
                        onChange={handleChange} 
                    />
                </label>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Sign Up</button>
                <h3> if already have Acoount then <Link to="/Login">Login</Link></h3>
            </form>
        </div>
    );
};

export default Signup;
