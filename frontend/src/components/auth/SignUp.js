import React, { useState } from "react";
import { registerUser } from "../../service/AuthService";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    navigate('/');
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await registerUser({ name, username, password });
      console.log("Sign up:", user);
    } catch (error) {
      console.error("Sign Up failed:", error.message);
    }
  };

  return (
    <>
    <div>
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
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
      <button type="submit">Sign Up</button>
    </form>
    <p onClick={handleClick}>Already have an account?Login here</p>
    </div>
    </>
  );
}

export default SignUp;
