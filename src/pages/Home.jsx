import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white">
      <div className="max-w-sm w-full flex flex-col min-h-screen justify-end px-6 py-12">
        <div className="flex flex-col items-start space-y-3 mx-10 mb-20">
          <button className="w-9 h-9 flex items-center justify-center ml-25 rounded-full bg-[#e8b200] text-white hover:bg-blue-500 cursor-pointer font-bold">
            1
          </button>
          <button className="w-9 h-9 flex items-center justify-center ml-13 mt-3 rounded-full bg-[#e8b200] text-white hover:bg-blue-500 cursor-pointer font-bold">
            2
          </button>
          <button className="w-9 h-9 flex items-center justify-center ml-16 rounded-full bg-[#e8b200] text-white hover:bg-blue-500 cursor-pointer font-bold">
            3
          </button>
          <button className="w-9 h-9 flex items-center justify-center ml-27 rounded-full bg-[#e8b200] text-white hover:bg-blue-500 cursor-pointer font-bold">
            4
          </button>
          <button className="w-9 h-9 flex items-center justify-center ml-40 rounded-full bg-[#e8b200] text-white hover:bg-blue-500 cursor-pointer font-bold">
            5
          </button>
        </div>
        <div className="mt-10 mb-6">
          <h1 className="text-xl font-bold text-[#32383b]">Welcome to PopX</h1>
          <p className="text-base font-medium text-[#acaeb0]">
            Lorem ipsum dolor sit amet, <br /> Consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/register"
            className="w-full text-white text-center rounded-lg py-3 bg-[#6e26ff] font-medium hover:opacity-90"
          >
            Create Account
          </Link>
          <button
            className="w-full text-center rounded-lg py-3 bg-[#ccb9fa] font-semibold hover:bg-[#bca5fa]"
          >
            Already Registered? <Link to="/login" className="hover:text-blue-600">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
