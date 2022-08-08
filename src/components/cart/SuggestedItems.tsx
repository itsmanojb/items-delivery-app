import Carousel from 'react-multi-carousel';
import { shuffleItems } from '../../utils/helper';
import { ProductItem } from '../../utils/types';
import CarouselButtonGroup from '../CarouselButtonGroup';
import ProductCard from '../ProductCard';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  topItems: ProductItem[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 767 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: -20,
  },
  tablet: {
    breakpoint: { max: 767, min: 500 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: -10,
  },
  mobile: {
    breakpoint: { max: 500, min: 360 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: -20,
  },
  minimobile: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: -20,
  },
};

const SuggestedItems = (props: Props) => {
  const items = shuffleItems(props.topItems);

  return (
    <div className="pb-3 flex relative mx-2">
      <div className="flex-1 overflow-auto -mr-5 -ml-1">
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
            <ProductCard key={i} data={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SuggestedItems;
