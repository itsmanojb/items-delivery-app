import Carousel from 'react-multi-carousel';
import { shuffleItems } from '../../utils/helper';
import { CartProduct, ProductItem } from '../../utils/types';
import CarouselButtonGroup from '../CarouselButtonGroup';
import AddToCartButton from '../AddToCartButton';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  topItems: ProductItem[];
};

const responsive = {
  uhdDesktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 7,
    slidesToSlide: 7,
    partialVisibilityGutter: 10,
  },
  superLargeDesktop: {
    breakpoint: { max: 1440, min: 1120 },
    items: 6,
    slidesToSlide: 6,
    partialVisibilityGutter: 10,
  },
  largeDesktop: {
    breakpoint: { max: 1120, min: 992 },
    items: 5,
    slidesToSlide: 5,
    partialVisibilityGutter: 10,
  },
  desktop: {
    breakpoint: { max: 992, min: 767 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 767, min: 400 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
};

const CarouselItem = ({ data }: { data: ProductItem }) => {
  const { product_id, name, unit, price, mrp, image_url, discount } = data;
  const cartProduct: CartProduct = {
    id: product_id.toString(),
    title: name,
    subTitle: unit,
    image: image_url,
    price: discount ? price : mrp,
    mrp: discount ? mrp : undefined,
  };
  return (
    <div className="_card h-[270px] w-[180px] relative flex cursor-pointer mb-2">
      {data.offer && (
        <div className="absolute bg-blue-600 text-white px-3 py-1 text-xs font-medium -left-[1px] top-4 rounded-tr-xl rounded-br-xl uppercase">
          {data.offer}
        </div>
      )}
      <div className="h-[154px] w-154px">
        <img src={image_url} alt="" className="h-full w-full p-2" />
      </div>
      <div className="overflow-hidden text-left flex flex-col mt-auto">
        <div className="_text-default text-[13px] font-medium leading-tight line-clamp-2 mb-0.5">
          {name}
        </div>
        <div className="text-sm _text-muted truncate mb-3">{unit}</div>
        <div className="flex items-center justify-between mt-auto">
          {discount ? (
            <div className="flex flex-col">
              <span className="text-[14px] _text-default font-semibold leading-none">
                ₹{price}
              </span>
              <del className="text-xs text-gray-400">₹{mrp}</del>
            </div>
          ) : (
            <div>
              <span className="text-[14px] _text-default">₹{mrp}</span>
            </div>
          )}
          <div>
            <AddToCartButton product={cartProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemsCarousel = (props: Props) => {
  const items = shuffleItems(props.topItems);

  return (
    <div className="h-[290px] mb-8 flex w-full relative">
      <div className="flex-1 overflow-auto">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass="text-center"
          partialVisible
        >
          {items?.map((item, i) => (
            <CarouselItem key={i} data={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ItemsCarousel;
