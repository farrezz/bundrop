import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');

    fetch('http://localhost:3001/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users.');
        }
        return response.json();
      })
      .then(users => {
        const user = users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          localStorage.setItem('token', 'fake-auth-token'); // Simulate token storage
          console.log('Login successful!');
          navigate('/'); // Redirect to home page
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('An error occurred during login. Please try again.');
      });
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;