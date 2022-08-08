import { ProductDetails, MoreProducts } from '../components/Products';
import Products from '../lib/data/products.json';

const ProductView = () => {
  const productItem = Products.filter((item) => item.id === '434549')[0]
    .product_data;
  const { merchant, ...rest } = productItem.data;
  const productInfo = {
    product: rest.product,
    varients: rest.variants_info,
  };

  const moreProducts = productItem.objects.map((obj) => {
    const { products, title } = obj.data;
    return {
      products,
      title,
    };
  });

  return (
    <div className="_container">
      <ProductDetails {...productInfo} />
      {moreProducts.map((products, i) => (
        <MoreProducts key={i} {...products} />
      ))}
    </div>
  );
};

export default ProductView;
