import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../CarouselButtonGroup';
import { shuffleItems } from '../../utils/helper';
import 'react-multi-carousel/lib/styles.css';
import Misc from '../../lib/data/layout.json';

type Props = {};

const responsive = {
  allScreen: {
    breakpoint: { max: 1920, min: 0 },
    items: 1,
  },
};

const HighlightedPromo = (props: Props) => {
  const allPromos = Misc.filter((item) => item.type === 0)[0].objects?.map(
    (el: any) => el.data
  );
  const promos = shuffleItems(allPromos);
  return (
    <section className="mt-12 mb-6 relative">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CarouselButtonGroup />}
        shouldResetAutoplay={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {promos?.map((item, i) => (
          <div className="flex items-center w-[1000px] mx-auto" key={i}>
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HighlightedPromo;
