import { HeroArea, CategoriesList, DiscountOffers } from '../components/home';
import Misc from '../lib/data/layout.json';

const Home = () => {
  // console.log(Misc);

  return (
    <div className="_container">
      <HeroArea />
      <CategoriesList />
      <DiscountOffers />
    </div>
  );
};

export default Home;
