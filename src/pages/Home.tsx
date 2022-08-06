import CategoriesList from '../components/CategoriesList';
import DiscountOffers from '../components/DiscountOffers';
import Misc from '../lib/data/layout.json';

const Home = () => {
  // console.log(Misc);

  return (
    <div className="_container">
      <CategoriesList />
      <DiscountOffers />
    </div>
  );
};

export default Home;
