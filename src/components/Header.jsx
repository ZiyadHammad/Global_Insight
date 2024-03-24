import darkMoon from "../assets/moon-filled.svg";
import lightMoon from "../assets/moon-outline.svg";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between h-32 items-center shadow-md sm:px-5">
      <h1 className="font-bold ">Where in the World?</h1>
      <div className="flex justify-evenly">
        <img
          src={theme === "dark" ? darkMoon : lightMoon}
          alt="moon-icon"
          onClick={toggleTheme}
          className="h-6 w-6"
        />
        <h1 onClick={toggleTheme} className="">
          {`${theme[0].toUpperCase() + theme.slice(1)} Mode`}
        </h1>
      </div>
    </header>
  );
};

export default Header;
