import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const RegisterForm = () => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '',password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validatePassword = password =>
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    password.length >= 6;

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      alert("Invalid password: Must have uppercase, lowercase and be at least 6 characters.");
      return;
    }
    try {
      const userCredential = await register(formData);
      console.log('User registered:', userCredential.user);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded ">
      <h2 className="text-2xl mb-4">Register</h2>
      <input name="name" onChange={handleChange} placeholder="Name" required className="input input-bordered w-full mb-2" />
      <input name="email" onChange={handleChange} placeholder="Email" required className="input input-bordered w-full mb-2" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required className="input input-bordered w-full mb-2" />
      <button type="submit" className="btn btn-success w-full">Register</button>
    </form>
  );
};

export default RegisterForm;
