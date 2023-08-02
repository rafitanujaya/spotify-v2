import { useState } from "react";

import ContainerLeft from "./ContainerLeft";
import ContainerRight from "./ContainerRight";

// * Global Variabel
import SearchContext from "../contexts/SearchContext";


export default function Container() {
  const [search, setSearch] = useState(false)

  const clickSearch = () => {
    setSearch(!search)
  }

  const searchContextValue = {
    search,
    clickSearch
  }

  return (
    <SearchContext.Provider value={searchContextValue}>
    <div className="container">
      <ContainerLeft />
      <ContainerRight />
    </div>
    </SearchContext.Provider>
  );
}
