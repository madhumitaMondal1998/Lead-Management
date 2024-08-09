import React, { useState } from "react";
import { createLead } from "../../service/LeadService";

const LeadForm = ({ refreshLeads }) => {
  const [lead, setLead] = useState({
    name: "",
    number: "",
    email: "",
    product: "",
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createLead(lead);
    refreshLeads();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="number" placeholder="Number" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <select name="product" onChange={handleChange}>
        <option value="A">Product A</option>
        <option value="B">Product B</option>
        <option value="C">Product C</option>
      </select>
      <button type="submit">Create Lead</button>
    </form>
  );
};

export default LeadForm;
