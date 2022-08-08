import { IoCaretForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
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

  console.log('product', product);
  console.log('varients', varients);

  return (
    <div className="relative grid lg:grid-cols-2 border-b _border-muted -mt-2">
      <div className="border-r _border-muted">
        <ProductGallery />
        <div className="px-4 lg:px-0 pt-8">
          <h4 className="text-2xl font-bold _text-default">Product Details</h4>
          <ProductInfoList />
        </div>
      </div>
      <div className="static lg:block">
        <div className="relative top-0 lg:sticky lg:top-[100px]">
          <div className="px-4 lg:pl-12 lg:pt-12">
            <Breadcrumb />
            <h1 className="text-[28px] leading-tight py-3">
              Too Yumm Veggie Stix Sour Cream & Onion Crisps - Pack of 2
            </h1>
            <Link to="/">
              <div className="cursor-pointer text-[#0c831f] font-semibold text-lg flex items-center">
                Too Yumm <IoCaretForwardSharp size={14} className="ml-1" />
              </div>
            </Link>
            <div className="mt-3">{/* <AddToCartButton/> */}</div>
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
