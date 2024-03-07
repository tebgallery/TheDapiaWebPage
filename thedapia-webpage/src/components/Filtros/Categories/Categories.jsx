import React from 'react';
import CategoryList from './CategoryList';

const Categories = ({title, categories}) => {

    return (
    <>
      <CategoryList title = {title} categories={categories} />
    </>
      );
};


export default Categories;