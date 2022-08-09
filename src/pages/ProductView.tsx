import { useParams } from 'react-router-dom';
import NotAvailable from '../components/NotAvailable';
import { ProductDetails, MoreProducts } from '../components/Products';
import Products from '../lib/data/products.json';

const ProductView = () => {
  let { id } = useParams();

  const productFound = Products.filter((item) => item.id === id)[0];

  if (productFound === undefined) {
    window.scrollTo(0, 0);
    return <NotAvailable />;
  }
  const productItem = productFound.product_data;
  const productInfo = {
    product: productItem.data.product,
    varients: productItem.data.variants_info,
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
