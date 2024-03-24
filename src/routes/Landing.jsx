import { Header, SearchBar, CountryCard } from "../components";

import { useTheme } from "../hooks/useTheme";
import countries from "../assets/data.json";

const Landing = () => {
  const { theme, toggleTheme } = useTheme();
  // console.log(`theme: ${theme}`, `Local Storage: ${localStorage.theme}`)
  return (
    <div className="bg-Light dark:bg-Dark h-screen w-screen">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="flex justify-center items-center my-4">
        <SearchBar />
      </div>

      <div className="flex flex-wrap justify-center">
        {countries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>

    </div>
  );
};

export default Landing;
