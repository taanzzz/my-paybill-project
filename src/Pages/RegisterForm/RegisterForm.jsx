import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validatePassword = password =>
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    password.length >= 6;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      toast.error("❌ Invalid password:Must have uppercase,lowercase and be at least 6 characters.");
      return;
    }
    try {
      const userCredential = await register(formData);
      toast.success("🎉 Registration successful!");
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
       toast.error(`⚠️ Error: ${error.message}`);
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-teal-200 to-cyan-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-[#FFFFFF] backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6 border border-white/50"
      >
        <h2 className="text-3xl font-bold text-center text-teal-800">Create an Account</h2>

        <div>
          <label className="block text-sm font-medium text-teal-700 mb-1">Full Name</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-teal-700 mb-1">Email Address</label>
          <input
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-teal-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-sm text-teal-700 mt-3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-600 hover:underline cursor-pointer font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
</>
  );
};

export default RegisterForm;
