import Button from "./Button";


const DetailCard = ({ country, countries }) => {

  const getCountryName = (id) => {
    const borderName =  countries.find(c => c.alpha3Code === id)
    return borderName ? borderName.name : id
  }

  return (
    <div>
   

      <div className="">
        <img src={country.flags.png} alt="flag" />
        <div className="">
          <h1>{country.name}</h1>
        </div>
        <div className="">
          <p>{country.nativeName}</p>
          <p>{country.population}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.capital}</p>
          <p>{country.topLevelDomain}</p>
          <p>{country.currencies[0].name}</p>
          {country.languages.map((lang, index) => (
            <p key={index}>
              {lang.name}
              {index !== country.languages.length - 1 && ", "}
            </p>
          ))}
          {country.borders.map((border, index) => (
            <Button key={index} label={getCountryName(border)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
