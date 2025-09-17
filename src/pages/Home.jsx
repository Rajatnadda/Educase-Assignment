import React from "react";
import Button from "../components/Button";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the PopX</h1>
      <p>
        Lorem ipsum dolor sit amet, <br /> Consectetur adipiscing elit,
      </p>
      <Button text="Create an Account" to="/register" />
      <Button text="Already Registered? Login" to="/login" />
    </div>
  );
};

export default Home;
