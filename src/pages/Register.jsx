import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/profile"); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-[#f7f9fa] flex flex-col px-4 m-auto w-[46dvh] h-[100dvh]"
    >
      <div className="mb-6 mt-10">
        <h1 className="text-2xl text-[#1d2226] font-bold">
          Create Your <br /> PopX account
        </h1>
      </div>

      <div className="flex-1">
        {[
          { label: "Full Name", type: "text", placeholder: "Enter your full name...", required: true },
          { label: "Phone Number", type: "tel", placeholder: "1234567890", required: true },
          { label: "Email Address", type: "email", placeholder: "Enter email address...", required: true },
          { label: "Password", type: "password", placeholder: "Enter password", required: true },
          { label: "Company Name", type: "text", placeholder: "Enter company name...", required: false }
        ].map((field, idx) => (
          <div className="relative mb-6" key={idx}>
            <label className="absolute -top-2.5 left-3 bg-[#f7f9fa] px-2 text-[12px] font-semibold text-[#8a4fff]">
              {field.label}{field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full border border-gray-300 text-gray-500 font-medium rounded-lg py-2 px-4 text-sm"
            />
          </div>
        ))}

        <div className="mb-20 -mt-3">
          <p className="text-[12px] font-semibold text-[#474b4f] mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-medium text-[#32383b]">
              <input type="radio" name="agency" value="yes" className="accent-[#8a4fff] w-4 h-6" required /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-[#32383b]">
              <input type="radio" name="agency" value="no" className=" w-4 h-6 accent-[#8a4fff]" /> No
            </label>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 bg-[#f7f9fa] py-4">
        <button 
          type="submit" 
          className="w-full py-2.5 cursor-pointer rounded-lg bg-[#6e26ff] text-white font-medium text-base hover:opacity-90 shadow-md"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default Register;
