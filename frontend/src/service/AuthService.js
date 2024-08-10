import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
  console.log("userData");
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
    console.log("response",response);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const loginUser = async (userData) => {
  console.log("userData",userData);
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
