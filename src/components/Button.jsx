import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Button.css"


const Button = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
