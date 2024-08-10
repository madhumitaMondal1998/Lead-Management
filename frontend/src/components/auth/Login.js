import React, { useState } from "react";
import { loginUser } from "../../service/AuthService";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate('/signup'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ username, password });
      console.log("Logged in:", user);
      navigate('/LeadForm')
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" >Login</button>
    </form>
    <p onClick={handleClick}>Don't have an account? Register here</p>
    </div>
    </>

  );
};

export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', formData);
//       console.log("token",res.data.token);
//       localStorage.setItem('token', res.data.token);
//       console.log('Login successful');
//       // Redirect to protected route or perform other actions
//     } catch (err) {
//       setError('Login failed: ' + err.response.data.error || 'Something went wrong');
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input type="email" name="email" onChange={onChange} />
//       <input type="password" name="password" onChange={onChange} />
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;

