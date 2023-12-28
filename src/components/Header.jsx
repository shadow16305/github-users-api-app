import moon from "../assets/moon.svg";

const Header = ({ value }) => {
  const { isDark, setIsDark } = value;

  const themeSwitchHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`flex justify-between font-['Space Mono'] w-full ${
        isDark ? "text-white" : "text-[#222731]"
      }`}
    >
      <h1 className="text-2xl font-bold">devfinder</h1>
      <button
        onClick={themeSwitchHandler}
        className="flex items-center gap-x-4 text-xs tracking-[2.5px] hover:font-bold transition-all duration-300"
      >
        DARK <img src={moon} alt="moon icon" />
      </button>
    </div>
  );
};

export default Header;
