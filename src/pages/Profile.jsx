import React from "react";

const Profile = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white">
      <div className="max-w-sm w-full flex flex-col px-6 bg-white">
        <h1 className="font-semibold text-lg text-gray-500 mb-4">
          Account Settings
        </h1>

        <div className="bg-slate-100 w-full border-b border-dotted p-4">
          <div className="flex items-center space-x-6 mb-6">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src="https://imgs.search.brave.com/PixY8_zgl8cU1m2y47bf0V-2jOluOmEHOR4564ScsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-semibold text-[#1d2226]">
                Marry Doe
              </h2>
              <p className="text-sm font-medium text-gray-700">
                Marry@Gmail.Com
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-sm font-medium leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Conseteture Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
