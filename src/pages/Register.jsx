import React from "react";
import Button from "../components/Button";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h1>
        Create your <br /> PopX account
      </h1>

      <label>Full Name</label>
      <input type="text" placeholder="Enter your Fullname..." />

      <label>Phone Number</label>
      <input type="tel" placeholder="1234567890" />

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address..." />

      <label>Password</label>
      <input type="password" placeholder="Enter Password..." />

      <label>Company Name</label>
      <input type="text" placeholder="Enter Company Name" />

     <label>Are you an Agency?</label>
<div className="radio-group">
  <label>
    <input type="radio" name="agency" value="yes" /> Yes
  </label>
  <label>
    <input type="radio" name="agency" value="no" /> No
  </label>
</div>

      <Button text="Create account" to="/login" />
    </div>
  );
};

export default Register;
