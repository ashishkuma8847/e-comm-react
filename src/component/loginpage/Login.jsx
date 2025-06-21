import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

const Login = () => {
  // State for login form inputs (email and password)
  const [form, setForm] = useState({ email: '', password: '' });

  // State for showing messages like success or error
  const [message, setMessage] = useState('');

  // State to track loading status during API call
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    try {
      // Set loading to true and clear any previous messages
      setLoading(true);
      setMessage('');

      // Send login request to backend API
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // Convert form state to JSON
      });

      const data = await res.json(); // Parse response JSON

      if (res.ok) {
        // If login is successful, store token in localStorage
        localStorage.setItem('id', data.data);

        // Show success message
        setMessage('Login successful!');
      } else {
        // Show error message from backend or default message
        setMessage(data.message || 'Login failed');
      }

    } catch (error) {
      // Handle unexpected errors (network, etc.)
      setMessage('Something went wrong. Please try again.');
      console.error('Login error:', error);
    } finally {
      // Always stop loading regardless of success or failure
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4">Login</h2>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} // Update email state
          className="w-full p-2 border rounded"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} // Update password state
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit Button (with loading state) */}
        <CustomButton type="submit" loading={loading} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </CustomButton>

        {/* Show status message if available */}
        {message && (
          <p className="text-sm mt-2 text-center text-gray-600">{message}</p>
        )}

        {/* Link to Sign Up page */}
        <p className="text-sm text-center">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
