import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = !email || !password; 

  return (
    <div className="flex flex-col justify-end m-auto max-w-[46dvh] p-1  mt-10 px-5 h-[100dvh]">
      <div className="max-w-sm w-full flex flex-col min-h-screen justify-start pt-7">
        <h1 className="text-[#1d2226] font-bold text-[26px] pt-3 mb-2">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-[16px] font-medium text-[#898c8f] mb-6">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
        <div className="relative mb-5">
          <label className="absolute -top-2.5 left-3 bg-[#f9f9f9] px-2 text-[12px] font-semibold text-[#8a4fff]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-2 px-4 text-sm"
          />
        </div>
        <div className="relative mb-3">
          <label className="absolute -top-2.5 left-3 bg-[#f9f9f9] px-2 text-[12px] font-semibold text-[#8a4fff]">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-2 px-4 text-sm"
          />
        </div>
        <Link
          to={isDisabled ? "#" : "/profile"} 
          className={`w-full rounded-lg text-center px-4 py-2 font-semibold cursor-pointer transition 
            ${isDisabled ? "bg-[#cccccc] text-white cursor-not-allowed" : "bg-[#6e26ff] text-white hover:opacity-90"}
          `}
          onClick={(e) => isDisabled && e.preventDefault()} // block click
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
