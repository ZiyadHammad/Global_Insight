import searchIcon from "../assets/searchIcon.svg";

const SearchBar = () => {
  return (
      <div className="relative flex items-center my-2">
        <img
          src={searchIcon}
          alt="icon"
          className="absolute h-6 w-6 left-4 p-1 "
        />
        <input
          className="pl-16 pr-4 py-2 w-full h-12 shadow-custom rounded-md text-sm text-gray-900"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
  );
};

export default SearchBar;