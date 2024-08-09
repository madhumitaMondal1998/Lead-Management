import axios from "axios";

const API_URL = "http://localhost:5000/api/leads";

export const createLead = async (lead) => {
  return await axios.post(API_URL, lead);
};

export const getLeads = async () => {
  return await axios.get(API_URL);
};

export const deleteLead = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
