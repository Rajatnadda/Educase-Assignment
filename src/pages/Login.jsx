import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#f9f9f9]">
      <div className="max-w-sm w-full flex flex-col min-h-screen justify-start px-6 py-12">
        <h1 className="text-[#1d2226] font-bold text-2xl  mb-2">
          Signin to your <br /> PopX account
        </h1>
            <p className="text-base font-medium text-[#898c8f] mb-8">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>
       <div className="relative mb-6">
          <label
            className="absolute -top-2.5 left-3 bg-[#f9f9f9] px-2 text-sm font-semibold text-[#8a4fff]"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border-1 border-gray-300  text-gray-500 font-medium  rounded-lg py-3 px-4 text-sm"
          />
        </div>
        <div className="relative mb-8">
          <label
            className="absolute -top-2.5 left-3 bg-[#f9f9f9]  px-2 text-sm font-semibold text-[#8a4fff]"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border-1 border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
          />
        </div>

        <Link
          to="/profile"
          className="w-full text-white rounded-lg text-center  bg-[#cccccc] px-4 py-3 font-semibold cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
