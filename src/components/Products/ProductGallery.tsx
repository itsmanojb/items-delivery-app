import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../CarouselButtonGroup';

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1200 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1200, min: 800 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

const ProductGallery = ({ images }: { images: string[] }) => {
  const [coverIndex, setCoverIndex] = useState(0);
  return (
    <div className="flex flex-col lg:border-b _border-muted">
      <div className="hidden lg:flex justify-center">
        <img
          src={images[coverIndex]}
          className="h-[480px] w-[480px] object-contain"
          alt=""
        />
      </div>
      <div className="w-[100px]">
        <div className="relative mx-10">
          <div className="w-[80%] mt-2.5 mb-8 mx-auto h-[76px]">
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
                renderDotsOutside={true}
                showDots={true}
                itemClass="text-center"
              >
                {images?.map((item, i) => (
                  <div
                    key={i}
                    className={`h-[66px] w-[66px] rounded-lg cursor-pointer border ${
                      coverIndex === i ? 'border-[#0c831f]' : '_border-muted'
                    } overflow-hidden`}
                    onClick={() => setCoverIndex(i)}
                  >
                    <img
                      src={item}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
