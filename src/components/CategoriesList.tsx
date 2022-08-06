import React from 'react';
import Categories from '../lib/data/categories.json'

type Props = {};

const CategoriesList = (props: Props) => {
  return <div>CategoriesList
    {Categories.map(c => <div key={c.id}>{c.title}</div>)}
  </div>;
};

export default CategoriesList;
