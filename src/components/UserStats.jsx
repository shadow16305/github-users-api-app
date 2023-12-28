import React from "react";

const UserStats = ({ userData, isDark }) => {
  return (
    <div
      className={`flex items-center gap-x-4 lg:gap-x-24 px-4 lg:px-8 py-4 rounded-xl mt-8 ${
        isDark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-xs">Repos</span>
        <span className="text-[22px] font-bold">{userData.public_repos}</span>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-xs">Followers</span>
        <span className="text-[22px] font-bold">{userData.followers}</span>
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <span className="text-xs">Following</span>
        <span className="text-[22px] font-bold">{userData.following}</span>
      </div>
    </div>
  );
};

export default UserStats;
