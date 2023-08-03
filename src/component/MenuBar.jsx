import { useContext } from "react";


import Search from "./Search";

// * Global Variabel
import SearchContext from "../contexts/SearchContext";

export default function MenuBar() {
  const { isSearchActive} = useContext(SearchContext)
  return (
    <>
    <div className="menu">
      <div id="search-manu">
      {isSearchActive && < Search />}
      </div>
      <div className="logo-title">Spotify</div>
    </div>
    
    </>
  );
}
