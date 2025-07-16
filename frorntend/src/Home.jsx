import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure global styles are applied

const Home = () => {
  return (
    <div className="form-container" style={{ textAlign: 'center' }}>
      <h2>Welcome to the Feedback Portal</h2>
      <p>Your opinion helps us improve. Please login and leave your feedback!</p>

      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>

        <Link to="/feedback">
          <button>Give Feedback</button>
        </Link>

        <Link to="/all-feedbacks">
          <button>View All Feedbacks</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
