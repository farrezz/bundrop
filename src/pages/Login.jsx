import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/Login.css'; // Assuming you'll create a CSS file for the Login page

function Login() {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
}

export default Login;