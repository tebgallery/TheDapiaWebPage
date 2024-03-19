import { React, useState } from "react";
import {faBookOpen,faChessKnight} from "@fortawesome/free-solid-svg-icons";
import MainFiltersItem from './MainFiltersItem'
import bagIcon from '../../../img/Filters/school-bag.png'
const MainFilters = ({toggleLibCat,toggleMochCat,toggleJugCat}) => {

  return (
    <div className="border-b-4 border-gray-200 pb-6">
      <MainFiltersItem
        icon={faBookOpen}
        text="Libreria"
        onClick={toggleLibCat}
      />
      <MainFiltersItem
        image={bagIcon}
        text="Mochilas"
        onClick={toggleMochCat}
      />
      <MainFiltersItem
        icon={faChessKnight}
        text="Juguetes"
        onClick={toggleJugCat}
      />
    </div>
  );
};

export default MainFilters;
