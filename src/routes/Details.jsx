import { Header, DetailCard, Button } from "../components";
import { useTheme } from "../hooks/useTheme";
import { useParams, Link } from "react-router-dom";

import arrow from "../assets/arrow.svg";

const Details = ({ countries }) => {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);
  const { theme, toggleTheme } = useTheme();

  if (!country) {
    // Handle case when country is not found
    return <div>Country not found</div>;
  }

  return (
    <div className="bg-Light dark:bg-Dark">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Link className="relative flex items-center  mx-4 my-8" to="/">
        <img className="h-6 w-6 absolute left-3" src={arrow} alt="arrow-icon" />
        <Button label={"Back"} />
      </Link>
      <div className="">
        <DetailCard country={country} countries={countries} />
      </div>
    </div>
  );
};

export default Details;
