import {
  ProductDetails,
  SimilarProducts,
  SuggestedProducts,
} from '../components/Products';

const ProductView = () => {
  return (
    <div className="_container">
      <ProductDetails />
      <SimilarProducts objects={[]} />
      <SuggestedProducts objects={[]} />
    </div>
  );
};

export default ProductView;
