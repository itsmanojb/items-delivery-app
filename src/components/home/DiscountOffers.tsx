import Carousel from 'react-multi-carousel';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { show as showModal } from '../../store/modal';
import { DiscountOffer } from '../../utils/types';
import Offers from '../../lib/data/discountOffers.json';
import CarouselButtonGroup from '../CarouselButtonGroup';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';

const responsive = {
  uhdDesktop: {
    breakpoint: { max: 1920, min: 1601 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 10,
  },
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1201 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 10,
  },
  largeDesktop: {
    breakpoint: { max: 1200, min: 993 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 992, min: 601 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
};

const DiscountCard = ({ data }: { data: DiscountOffer }) => {
  const dispatch = useAppDispatch();
  const [codeCopied, setCodeCopied] = useState<boolean>(false);

  const showDiscountInfo = (): void => {
    dispatch(showModal({ data, type: 'discount' }));
  };

  const copyCouponCode = async (
    e: React.MouseEvent<HTMLButtonElement>,
    text: string
  ) => {
    e.stopPropagation();
    if ('clipboard' in navigator) {
      try {
        await navigator.clipboard.writeText(text);
        setCodeCopied(true);
        setTimeout(() => {
          setCodeCopied(false);
        }, 2000);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      document.execCommand('copy', true, text);
      setCodeCopied(true);
      setTimeout(() => {
        setCodeCopied(false);
      }, 2000);
    }
  };

  return (
    <div
      className="border border-blue-600 rounded-lg cursor-pointer mr-4 lg:w-[277px] h-[188px] _coupon overflow-hidden flex flex-col"
      onClick={() => showDiscountInfo()}
    >
      <div className="p-4">
        <div className="w-[52px] h-[35px]">
          <img
            src={data.icon_url}
            alt=""
            className="h-full object-cover w-full"
          />
        </div>
        <h5 className="mt-2 pb-2 text-[20px] font-bold leading-none">
          {data.title}
        </h5>
        <p className="text-xs _text-default">{data.subtitle}</p>
      </div>
      <div className="bg-[#f6fbff] py-3 px-4 flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <small className="text-[10px] font-medium _text-muted">
            {data.offer.key}
          </small>
          <span className="text-xs font-bold text-blue-500">
            {data.offer.value}
          </span>
        </div>
        <button
          type="button"
          onClick={(e) => copyCouponCode(e, data.offer.value)}
          className="bg-[#1f1f1f] text-white w-[104px] rounded-lg font-medium lowercase text-sm leading-none px-4 py-1.5 h-7"
        >
          {codeCopied ? 'Copied' : data.button_cta_text}
        </button>
      </div>
    </div>
  );
};

const DiscountOffers = () => {
  const allOffers = Offers as DiscountOffer[];
  // console.log('allOffers', allOffers);

  return (
    <section>
      <h3 className="font-semibold text-2xl my-6 mx-4">
        Bank &amp; Wallet Offers
      </h3>
      <div className="mx-4 relative">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass=""
          partialVisible
        >
          {allOffers?.map((offer, i) => (
            <DiscountCard key={i} data={offer} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default DiscountOffers;
