import { useContext } from "react";


import Search from "./Search";

// * Global Variabel
import SearchContext from "../contexts/SearchContext";

export default function MenuBar() {
  const { search } = useContext(SearchContext)
  return (
    <>
    <div className="menu">
      <div id="search-manu">
      {search && < Search />}
      </div>
      <div className="logo-title">Spotify</div>
    </div>
    
    </>
  );
}
