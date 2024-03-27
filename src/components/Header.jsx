import darkMoon from "../assets/moon-filled.svg";
import lightMoon from "../assets/moon-outline.svg";

import { Link } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between h-32 items-center shadow-md sm:px-4 ">
      <Link to="/">
        <h1 className="font-bold text-lg dark:text-darkTxt">
          Where in the World?
        </h1>
      </Link>
      <div className="flex justify-between items-center">
        <img
          src={theme === "dark" ? darkMoon : lightMoon}
          alt="moon-icon"
          onClick={toggleTheme}
          className="h-4 w-4 mx-2 dark:invert"
        />
        <h1 onClick={toggleTheme} className="font-normal dark:text-darkTxt">
          {`${theme[0].toUpperCase() + theme.slice(1)} Mode`}
        </h1>
      </div>
    </header>
  );
};

export default Header;
