import React from 'react';
import Categories from '../lib/data/categories.json';

type Props = {};

const CategoriesList = (props: Props) => {
  // console.log('Categories', Categories);

  return (
    <div className="grid grid-cols-10 my-2">
      {Categories.map((c) => (
        <div key={c.id} className="h-48">
          <img src={`categories/${c.coverFile}`} alt={c.title} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
