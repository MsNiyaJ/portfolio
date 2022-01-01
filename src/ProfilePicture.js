import React from 'react';

const ProfilePicture = () => {
  return (
    <img
      src="/images/profile-pic.jpeg"
      alt=""
      className="rounded-full w-52 h-52 sm:w-80 sm:h-80 border-4 border-white hover:scale-110 duration-300"
    />
  );
};

export default ProfilePicture;
