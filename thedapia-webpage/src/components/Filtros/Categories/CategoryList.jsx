import React from "react";

const CategoryList = ({ title,categories }) => {
  return (
    <div className="border-b-4 border-gray-200 pb-4">
      <h5 className="uppercase text-sm text-gray-400 py-6">{title}</h5>
        {categories.map((category, index) => (
          <p
            key={index}
            className="py-1 px-3 mb-1 rounded hover:bg-fuchsia-200 hover:text-fuchsia-600 cursor-pointer"
          >
            {category}
          </p>
        ))}
    </div>
  );
};

export default CategoryList;
