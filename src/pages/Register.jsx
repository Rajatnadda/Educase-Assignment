import React from "react";
import { Link } from "react-router-dom";

const Register = () => {




  return (
    <div className="w-full min-h-screen flex justify-center bg-white">
      <div className="max-w-sm w-full flex flex-col min-h-screen justify-between px-6">
        <div>
          <h1 className="text-[#1d2226] font-bold text-2xl mb-6">
            Create your <br /> PopX account
          </h1>
      
            <div className="relative mb-6">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm font-semibold text-[#8a4fff]">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Full Name..."
                className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
              />
            </div>
            <div className="relative mb-6">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm font-semibold text-[#8a4fff]">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="1234567890"
                className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
              />
            </div>
            <div className="relative mb-6">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm font-semibold text-[#8a4fff]">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address..."
                className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
              />
            </div>
            <div className="relative mb-6">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm font-semibold text-[#8a4fff]">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
              />
            </div>
            <div className="relative mb-6">
              <label className="absolute -top-2.5 left-3 bg-white px-2 text-sm font-semibold text-[#8a4fff]">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name..."
                className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-3 px-4 text-sm"
              />
            </div>
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#474b4f] mb-2">
                Are you an Agency?<span className="text-red-500">*</span>
              </p>
              <div className="flex items-center gap-6 mb-18">
                <label className="flex items-center gap-2 text-sm font-medium text-[#32383b]">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    className="accent-[#8a4fff]"
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center gap-3 text-sm font-medium text-[#32383b]">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    className="accent-[#8a4fff]"
                  />{" "}
                  No
                </label>
              </div>
            </div>
        </div>
        <div className="flex flex-col w-full">
          <Link to="/login"
                 className="bg-[#6e26ff] px-4 text-center py-2 text-white w-full border rounded-lg"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
