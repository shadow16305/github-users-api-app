const UserInfo = ({ userData, isDark }) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-x-5">
        {/* DESKTOP */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <h1 className="text-[26px] font-bold">{userData.login}</h1>
          <p className="text-[#697C9A]">
            {userData.created_at &&
              `Joined ${new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(userData.created_at))}`}
          </p>
        </div>
        {/* MOBILE */}
        <div className="lg:hidden flex flex-col">
          <h1 className="text-[26px] font-bold">{userData.login}</h1>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-[#0079FF]"
          >
            @{userData.login}
          </a>
          <p className="text-[#697C9A]">
            {userData.created_at &&
              `Joined ${new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(userData.created_at))}`}
          </p>
        </div>

        <a
          href={userData.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-[#0079FF] hidden lg:block"
        >
          @{userData.login}
        </a>
      </div>
    </>
  );
};

export default UserInfo;
