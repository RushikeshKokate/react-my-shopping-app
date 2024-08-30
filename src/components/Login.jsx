import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
        } catch (err) {
            console.error('Login error:', err);
            setError('Failed to log in. Please check your email and password.');
        } finally {
            setLoading(false);
            navigate("/Store")
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <h4>If you don't have an account <Link to="/Signup">Signup</Link></h4>
            </form>
        </div>
    );
};

export default Login;
