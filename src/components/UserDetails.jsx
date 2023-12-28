import pin from "../assets/003-pin.svg";
import url from "../assets/002-url.svg";
import twitter from "../assets/004-twitter.svg";
import office from "../assets/001-office-building.svg";

const UserDetails = ({ userData, isDark }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 mt-9">
      <div className="flex flex-col">
        <p
          className={`flex items-center gap-2 text-sm ${
            !userData.location && "opacity-50"
          }`}
        >
          <img src={pin} className={!isDark && "invert"} alt="pin" />{" "}
          {!userData.location && "Not available"} {userData.location}
        </p>
        <a
          href={userData.blog}
          className={`flex items-center gap-2 mt-5 text-sm ${
            !userData.blog && "opacity-50"
          }`}
        >
          <img src={url} className={!isDark && "invert"} alt="blog" />
          {!userData.blog && "Not Available"} {userData.blog}
        </a>
      </div>
      <div className="flex flex-col mt-5 lg:mt-0">
        <p className="flex items-center gap-2 text-sm opacity-50">
          <img src={twitter} className={!isDark && "invert"} alt="twitter" />{" "}
          Not Available
        </p>
        <a
          href={userData.company}
          className={`flex items-center gap-2 mt-5 text-sm ${
            !userData.company && "opacity-50"
          }`}
        >
          <img src={office} className={!isDark && "invert"} alt="office" />{" "}
          {!userData.company && "No company specified"} {userData.company}
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
