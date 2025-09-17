import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
     <div className="profile-container2">
       <img
        className="profile-image"
        src="https://imgs.search.brave.com/PixY8_zgl8cU1m2y47bf0V-2jOluOmEHOR4564ScsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw"
        alt="Profile"
      />
      <h1 className="profile-name">Marry Doe</h1>
     </div>
      <p className="profile-email">Marry@gmail.com</p>
      <p className="profile-bio">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};

export default Profile;
