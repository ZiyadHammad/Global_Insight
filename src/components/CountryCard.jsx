import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link
      to={`details/${country.alpha3Code}`}
      className="max-w-64 min-h-80 shadow-md rounded-md m-10 dark:bg-darkEl dark:text-darkTxt"
    >
      <img
        className="rounded-md w-full h-44"
        src={country.flags.png}
        alt="flag"
      />

      <div className="flex flex-col mx-6 my-4 px-2 py-4">
        <h3 className="text-lg font-bold mb-2">{country.name}</h3>
        <p className="my-0.5 text-sm text-textColor font-light">
          <span className="font-medium">Region: </span>
          {country.region}
        </p>
        <p className="my-0.5 text-sm text-textColor font-light">
          <span className="font-medium">Population: </span>
          {country.population}
        </p>
        <p className="my-0.5 text-sm text-textColor font-light">
          <span className="font-medium">Capital: </span>
          {country.capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
