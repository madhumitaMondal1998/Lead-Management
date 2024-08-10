import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import LeadForm from "./components/Leads/LeadForm";
import LeadList from "./components/Leads/LeadList";
// import { logoutUser } from "./service/AuthService";

const App = () => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // console.log("here",user)

  // const handleLogout = () => {
  //   logoutUser();
  //   setUser(null);
  // };

  return (
    <div>
      <Router>
        <h1>Lead Management</h1>
        <Routes>
          {/* {!user ? ( */}
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Login />} />
            {/* </> */}
          {/* ) : ( */}
            {/* <> */}
              <Route path="/LeadForm" element={<LeadForm />} />
              <Route path="/LeadForm" element={<LeadList />} />
            </>
          {/* )} */}
        </Routes>
      </Router>
      {/* {
        !user ? <>             
         <button onClick={handleLogout}>Logout</button>
          </> :<></>
      } */}
      </div>
  );
};

export default App;




