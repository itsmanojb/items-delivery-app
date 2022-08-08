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
  screenAll: {
    breakpoint: { max: 1920, min: 0 },
    items: 2,
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
