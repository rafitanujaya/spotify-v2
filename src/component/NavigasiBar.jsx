import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

export default function NavigasiBar() {
  const { isSearchActive, setIsSearchActive } = useContext(SearchContext);

  const handleHomeClick = () => {
    setIsSearchActive(false);
  };

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };
  
  return (
    <>
      <nav>
        <ul>
          <li>
            <p
              onClick={handleHomeClick}
              style={{ color: isSearchActive ? "#fff" : "green" }}
            >
              <i className="fas fa-home" />
              Home
            </p>
          </li>
          <li>
            <p
              onClick={handleSearchClick}
              style={{ color: isSearchActive ? "green" : "#fff" }}
            >
              <i className="fas fa-search" />
              Search
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
}
