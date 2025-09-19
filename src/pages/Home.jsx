import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f7f9fa] flex flex-col  justify-end m-auto  max-w-[46dvh] p-1 h-[100dvh] ">
      <h1 className="text-[#1d2226] font-bold  text-2xl  ">Welcome to PopX</h1>
      <p className="text-[#8c8e91] font-normal text-md  mt-1 ">
        Lorem ipsum dolor sit amet,
        <br />
         consectetur adipiscing elit,
      </p>
      <div className="flex flex-col gap-2 mt-6">
        <Link
          className="bg-[#6e26ff] text-[#ffffff] px-4 py-3 w-full font-semibold text-center  text-sm  rounded-lg"
          to="/register"
        >
          Create Account
        </Link>
        <button className="bg-[#ccb9fa] text-[#1d2226] font-bold enter text-sm px-4 py-3  rounded-lg mb-8">
          Already Registered?{" "}
          <Link className="hover:text-[#2563eb] " to="/login">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
