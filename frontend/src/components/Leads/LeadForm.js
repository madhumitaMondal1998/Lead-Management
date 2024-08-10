import React, { useState } from 'react';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    product: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/leads', formData);
      console.log('Lead created:', response.data);
    } catch (error) {
      console.error('Error creating lead:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="number" placeholder="Number" value={formData.number} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="product" placeholder="Product" value={formData.product} onChange={handleChange} required />
      <button type="submit">Create Lead</button>
    </form>
  );
};

export default LeadForm;
