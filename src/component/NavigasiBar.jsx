import { useContext } from "react";

// * Global Variabel
import SearchContext from "../contexts/SearchContext";

export default function NavigasiBar() {
  const { clickSearch } = useContext(SearchContext)
  return (
    <>
    <nav>
      <ul>
        <li>
          <p>
            <i className="fas fa-home" />
            Home
          </p>
        </li>
        <li>
          <p onClick={clickSearch}>
            <i className="fas fa-search" />
            Search
          </p>
        </li>
      </ul>
    </nav>
    </>
    
  );
}
