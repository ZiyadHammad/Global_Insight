import Button from "./Button";

const DetailCard = ({ country, countries }) => {
  const getCountryName = (id) => {
    const borderName = countries.find((c) => c.alpha3Code === id);
    return borderName ? borderName.name.split(" ")[0] : id;
  };

  return (
    <div className="flex flex-col mx-8">
      <div className="flex justify-center items-center">
        <img className="shadow-md " src={country.flags.png} alt="flag" />
      </div>

      <div className="font-bold my-4">
        <h1 className="mt-4">{country.name}</h1>
      </div>

      <div className="text-sm">
        <p className="my-1">
          <span className="font-bold">Native Name: </span>
          {country.nativeName}
        </p>
        <p className="my-1">
          <span className="font-bold">Population: </span>
          {country.population.toLocaleString()}
        </p>
        <p className="my-1">
          <span className="font-bold">Region: </span>
          {country.region}
        </p>
        <p className="my-1">
          <span className="font-bold">Sub Region: </span>
          {country.subregion}
        </p>
        <p className="my-1">
          <span className="font-bold">Capital: </span>
          {country.capital}
        </p>
        <p className="my-1">
          <span className="font-bold">Top Level Domain: </span>
          {country.topLevelDomain}
        </p>
        <p className="my-1">
          <span className="font-bold">Currencies: </span>
          {country.currencies[0].name}
        </p>
        <p className="font-bold my-1">
          Languages:{" "}
          {country.languages.map((lang, index) => (
            <span className="font-normal" key={index}>
              {lang.name}
              {index !== country.languages.length - 1 && ", "}
            </span>
          ))}
        </p>

        <p className="font-bold my-4">Border Countries:</p>
      </div>

      <div className="flex flex-wrap justify-center text-sm">
        {country.borders.map((border, index) => (
          <Button key={index} label={getCountryName(border)}/>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;
