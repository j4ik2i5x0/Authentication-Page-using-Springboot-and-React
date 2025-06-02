import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const googleLogin = () => {
    window.location.href = 'http://localhost:5050/login/google';
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/register', { name, email, password });
      alert('Registration successful!');
      navigate('/home');
    } catch (error) {
      alert('Registration failed! Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <h3>Join us!!</h3>
      <form className="auth-form" onSubmit={handleRegister}>
        <div className="textbox">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder=" "
          />
          <label>Name</label>
        </div>
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
          Register
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>

      <div className="google-login">
        <p>Or sign up with:</p>
        <button onClick={googleLogin}>Continue with Google</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
