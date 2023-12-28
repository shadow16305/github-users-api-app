import { useState, useEffect } from "react";

import UserInfo from "./UserInfo";
import UserStats from "./UserStats";
import UserDetails from "./UserDetails";

const Card = ({ value }) => {
  const [userData, setUserData] = useState(null);

  const { isDark, searchValue } = value;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${searchValue}`
        );

        if (!response.ok) {
          throw new Error("Could not find the user you were looking for.");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setUserData(null);
      }
    };

    if (searchValue) {
      fetchUser();
    }
  }, [searchValue]);

  return (
    <div
      className={`w-full px-12 py-11 mt-6 rounded-2xl shadow-md ${
        isDark ? "bg-[#1E2A47] text-white" : "bg-[#FEFEFE] text-[#2B3442]"
      }`}
    >
      {userData && (
        <div className="flex flex-col lg:flex-row justify-center gap-x-9 w-full">
          <img
            src={userData.avatar_url}
            className="w-[120px] h-[120px] rounded-full"
            alt="avatar"
          />
          <div className="flex flex-col w-full">
            <UserInfo userData={userData} isDark={isDark} />
            <p className="text-[#4B6A9B] mt-5">
              {!userData.bio
                ? "This user does not have a bio..."
                : userData.bio}
            </p>
            <UserStats userData={userData} isDark={isDark} />
            <UserDetails userData={userData} isDark={isDark} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
