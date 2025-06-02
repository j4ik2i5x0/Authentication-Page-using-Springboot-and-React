import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const googleLogin = () => {
    window.location.href = 'http://localhost:5050/login/google';
  };

  const handleLocalLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/login/local', { email, password });
      alert('Login successful!');
      navigate('/home');
    } catch (error) {
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <h3>Authentication Page!</h3>
      <form className="auth-form" onSubmit={handleLocalLogin}>
        <div className="textbox">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder=" "
          />
          <label>Email</label>
        </div>
        <div className="textbox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder=" "
          />
          <label>Password</label>
        </div>
        <button type="submit">
          Login
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>

      <div className="google-login">
        <p>Or login with:</p>
        <button onClick={googleLogin}>Continue with Google</button>
        <p>
          Don’t have an account? <Link to="/register">Sign up!</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
