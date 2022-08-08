import {
  HeroArea,
  CategoriesList,
  DiscountOffers,
  FeaturedPromo,
  HighlightedPromo,
  ProductsRow,
} from '../components/home';
import Misc from '../lib/data/layout.json';

const Home = () => {
  const productItems: any[] = Misc.filter((item) => item.type === 77).map(
    (el) => ({
      data: el.data,
      objects: el.objects,
    })
  );

  return (
    <div className="_container">
      <HeroArea />
      <FeaturedPromo />
      <CategoriesList />
      <DiscountOffers />
      <HighlightedPromo />
      {productItems.map((products, i) => (
        <ProductsRow key={i} {...products} />
      ))}
    </div>
  );
};

export default Home;
