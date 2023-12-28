import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Card from "./components/Card";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("bg-[#F6F8FF]");
      document.body.classList.add("bg-[#141D2F]");
    } else {
      document.body.classList.remove("bg-[#141D2F]");
      document.body.classList.add("bg-[#F6F8FF]");
    }
  });

  return (
    <div className="lg:h-screen flex flex-col items-center justify-center max-w-[350px] md:max-w-[600px] lg:max-w-none lg:w-[730px] mx-auto mt-9 lg:mt-0">
      <Header value={{ isDark, setIsDark }} />
      <SearchBox value={{ isDark, setSearchValue }} />
      <Card value={{ isDark, searchValue }} />
    </div>
  );
}

export default App;
