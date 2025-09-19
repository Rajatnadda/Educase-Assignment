import React from "react";
import { Camera } from "lucide-react"; 

const Profile = () => {
  return (
    <div className=" m-auto w-[46dvh] min-h-[100dvh] flex justify-center ">
      <div className="max-w-sm w-full flex flex-col bg-white px-6 pt-6">
        <h1 className="font-semibold text-[16px] px-3 text-[#1d2226] pt-7 mb-4">
          Account Settings
        </h1>
        <div className="bg-[#f7f9fa] w-full border-b-1 border-dashed border-gray-400 p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://imgs.search.brave.com/PixY8_zgl8cU1m2y47bf0V-2jOluOmEHOR4564ScsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 flex items-center justify-center bg-[#8a4fff] rounded-full shadow-md border-2 border-white">
                <Camera className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-[14px] font-semibold text-[#1d2226]">
                Marry Doe
              </h2>
              <p className="text-[13px] font-semibold text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="text-[11px] font-semibold text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet,Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      <div  className="border-b-1 bg-[#f7f9fa] border-gray-400 border-dashed mb- pt-100"></div>
      </div>
    </div>
  );
};

export default Profile;
