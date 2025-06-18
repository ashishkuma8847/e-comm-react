import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // Form state to hold user inputs: name, email, password
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // Message state to display success or error message
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submit behavior

    // Send POST request to signup API
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form), // Convert form data to JSON
    });

    const data = await res.json(); // Parse JSON response

    // Show message from backend (success or error)
    setMessage(data.message);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded">
      {/* Heading */}
      <h2 className="text-xl font-bold mb-4">Signup</h2>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} // Update name in state
          className="w-full p-2 border rounded"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} // Update email in state
          className="w-full p-2 border rounded"
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} // Update password in state
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Signup
        </button>

        {/* Show server response message if any */}
        {message && (
          <p className="text-sm mt-2 text-center text-gray-600">{message}</p>
        )}
      </form>

      {/* Link to Login page */}
      <Link to="/Login" className="text-blue-600 hover:underline">
        Login
      </Link>
    </div>
  );
};

export default Signup;
