import React from 'react';
import CategoriesList from '../components/CategoriesList';
import Misc from '../lib/data/layout.json'

const Home = () => {
  console.log(Misc);
  
  return (
    <div>
      <CategoriesList />
    </div>
  );
};

export default Home;
