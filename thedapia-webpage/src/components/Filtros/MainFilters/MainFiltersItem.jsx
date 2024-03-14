import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainFiltersItem = ({ icon, image, text, onClick }) => {
    return (
      <div className='py-1 px-3 flex items-center mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer' onClick={onClick}>
        {icon && <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-3" />}
        {image && <img src={image} alt="Category" className="w-5 h-5 mr-3" />}
        <h4 className="text-lg">{text}</h4>
      </div>
    );
  };
  
  export default MainFiltersItem;