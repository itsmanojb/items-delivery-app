import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../CarouselButtonGroup';
import { shuffleItems } from '../../utils/helper';
import Misc from '../../lib/data/layout.json';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  uhdDesktop: {
    breakpoint: { max: 1920, min: 1601 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 40,
  },
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 40,
  },
  largeDesktop: {
    breakpoint: { max: 1200, min: 767 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 767, min: 540 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
};

const FeaturedPromo = () => {
  const allPromos = Misc.filter((item) => item.type === 66)[0].objects?.map(
    (el: any) => el.data.image_url
  );

  const promos = shuffleItems(allPromos);

  return (
    <section>
      <div className="mx-4 relative pb-2 pt-4">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass="mr-2"
          partialVisible
        >
          {promos?.map((promo, i) => (
            <div
              key={i}
              className="rounded-lg w-full lg:w-[360px] cursor-pointer max-h-[280px] sm:h-[200px] overflow-hidden"
            >
              <img
                src={promo}
                alt="..."
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedPromo;
