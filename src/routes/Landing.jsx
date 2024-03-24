import { Header, SearchBar, CountryCard } from "../components";

import { useTheme } from "../hooks/useTheme";


const Landing = ({countries}) => {
  const { theme, toggleTheme } = useTheme();
  // console.log(`theme: ${theme}`, `Local Storage: ${localStorage.theme}`)
  return (
    <div className="bg-Light dark:bg-Dark ">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="flex justify-center items-center ">
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
