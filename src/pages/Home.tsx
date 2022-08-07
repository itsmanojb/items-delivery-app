import {
  HeroArea,
  CategoriesList,
  DiscountOffers,
  FeaturedPromo,
} from '../components/home';
import Misc from '../lib/data/layout.json';

const Home = () => {
  // console.log(Misc);

  return (
    <div className="_container">
      <HeroArea />
      <FeaturedPromo />
      <CategoriesList />
      <DiscountOffers />
    </div>
  );
};

export default Home;
