import React from "react";
import Button from "../components/Button";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="containers">   
      <h1>Signin to your <br/> PopX account</h1>
      <p>
        Lorem ipsum dolor sit amet, <br />
        consecture adipiscing elit.
      </p>

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address..." />

      <label>Password</label>
      <input type="password" placeholder="Enter Password..." />

      <Button text="Login" to="/profile" />
    </div>
  );
};

export default Login;
