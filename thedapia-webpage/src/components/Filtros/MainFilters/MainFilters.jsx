import { React, useState } from "react";
import {faBookOpen,faChessKnight} from "@fortawesome/free-solid-svg-icons";
import MainFiltersItem from './MainFiltersItem'
import bagIcon from '../../../img/Filters/school-bag.png'
const MainFilters = () => {
  const [libreriaCategories, setLibreriaCategories] = useState(false);
  const [mochilasCategories, setMochilasCategories] = useState(false);
  const [juguetesCaegories, setJuguetesCategories] = useState(false);

  const toggleLibreriaCategories = () => {
    setLibreriaCategories(!libreriaCategories);
    setMochilasCategories(false);
    setJuguetesCategories(false);
  };

  const toggleMochilasCategories = () => {
    setMochilasCategories(!mochilasCategories);
    setLibreriaCategories(false);
    setJuguetesCategories(false);
  };

  const toggleJuguetesCategories = () => {
    setJuguetesCategories(!juguetesCaegories);
    setLibreriaCategories(false);
    setMochilasCategories(false);
  };

  return (
    <div className="border-b-4 border-gray-200 pb-6">
      <MainFiltersItem
        icon={faBookOpen}
        text="Libreria"
        onClick={toggleLibreriaCategories}
      />
      <MainFiltersItem
        image={bagIcon}
        text="Mochilas"
        onClick={toggleMochilasCategories}
      />
      <MainFiltersItem
        icon={faChessKnight}
        text="Juguetes"
        onClick={toggleJuguetesCategories}
      />
    </div>
  );
};

export default MainFilters;
