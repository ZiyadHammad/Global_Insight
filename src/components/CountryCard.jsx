import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link to="/details" className="max-w-64 shadow-custom rounded-md m-10">
      <img
        className="rounded-md w-full h-44"
        src={country.flags.png}
        alt="flag"
      />

      <div className="flex flex-col m-4">
        <h3 className="py-2 font-bold">{country.name}</h3>
        <p className="text-sm text-textColor">
          <span className="font-bold pr-1">Region:</span>
          {country.region}
        </p>
        <p className="text-sm text-textColor">
          <span className="font-bold pr-1">Population:</span>
          {country.population}
        </p>
        <p className="text-sm text-textColor">
          <span className="font-bold pr-1">Capital:</span>
          {country.capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
