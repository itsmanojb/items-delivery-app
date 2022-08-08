import { IoCaretForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { getProductForCart } from '../../utils/helper';
import { ProductItemDetailed } from '../../utils/types';
import { allFeatures } from '../BrandPromotion';
import { AddToCartButton } from '../shared';
import Breadcrumb from './Breadcrumb';
import ProductGallery from './ProductGallery';
import ProductInfoList from './ProductInfoList';

const ProductDetails = (props: any) => {
  const {
    product,
    varients,
  }: { product: ProductItemDetailed; varients: ProductItemDetailed[] } = props;

  const productAsCartItem = getProductForCart(product);

  console.log('product', product);
  console.log('varients', varients);

  return (
    <div className="relative grid lg:grid-cols-2 border-b _border-muted -mt-2">
      <div className="border-r _border-muted">
        <ProductGallery images={product.sliding_images} />
        <div className="px-4 lg:px-0 pt-8">
          <h4 className="text-2xl font-bold _text-default">Product Details</h4>
          <ProductInfoList {...product.attribute_collection} />
        </div>
      </div>
      <div className="static lg:block">
        <div className="relative top-0 lg:sticky lg:top-[100px]">
          <div className="px-4 lg:pl-12 lg:pt-12">
            <Breadcrumb {...product} />
            <h1 className="text-[28px] leading-tight py-3">{product.name}</h1>
            <Link to="/">
              <div className="cursor-pointer text-[#0c831f] font-semibold text-lg flex items-center">
                {product.brand}{' '}
                <IoCaretForwardSharp size={14} className="ml-0.5" />
              </div>
            </Link>
            <div className="my-4 h-12 w-[130px]">
              <AddToCartButton size="lg" product={productAsCartItem} />
            </div>
            <div className="pb-4">
              <h4 className="font-bold _text-default text-[15px] py-3">
                Why shop from bringit?
              </h4>
              {allFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 py-1">
                  <div>
                    <img className="w-12 h-12" src={feat.imgSrc} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-black text-[13px]">{feat.text}</h5>
                    <p className="text-xs _text-muted">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
