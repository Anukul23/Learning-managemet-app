import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Optional: Add styles here

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedData &&
      storedData.username === loginData.username &&
      storedData.password === loginData.password
    ) {
      setError('');
      console.log('Login successful!');
      navigate('/dashboard'); // change to your desired page
    } else {
      setError('Invalid username or password');
      navigate("/")
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {error && <span className="error">{error}</span>}

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
