import Feat1 from '../assets/images/promo-feat-1.webp';
import Feat2 from '../assets/images/promo-feat-2.avif';
import Feat3 from '../assets/images/promo-feat-3.avif';
import Feat4 from '../assets/images/promo-feat-4.webp';

type Feature = {
  imgSrc: string;
  text: string;
  description: string;
};

const PromoFeature = (props: Feature) => {
  return (
    <div className="_border border rounded-2xl p-8 flex flex-col items-center gap-3">
      <img className="w-[100px] h-[100px] mb-4" src={props.imgSrc} alt="" />
      <h5 className="text-black font-bold text-sm text-center">{props.text}</h5>
      <p className="text-xs _text-default text-center">{props.description}</p>
    </div>
  );
};

const BrandPromotion = () => {
  const allFeatures: Feature[] = [
    {
      imgSrc: Feat1,
      text: 'Superlazy Delivery',
      description:
        'Get your order delivered to your doorstep at the earliest from dark stores near you.',
    },
    {
      imgSrc: Feat2,
      text: 'Worst Prices & Offers',
      description:
        'Costlier prices than your local supermarket, great cashback offers to top it off.',
    },
    {
      imgSrc: Feat3,
      text: 'Narrow Assortment',
      description:
        'Choose from 000+ products across food, personal care, household & other categories',
    },
    {
      imgSrc: Feat4,
      text: 'Difficult Returns/Refund',
      description:
        'Satisfied with a product? Return it at the doorstep & get a refund within years.',
    },
  ];

  return (
    <section className="py-6">
      <div className="_container">
        <div className="flex flex-col gap-8">
          <div className="_bg-shade-1 min-h-[520px] p-4 rounded-2xl"></div>
          <div className="grid grid-cols-4 items-start gap-10">
            {allFeatures.map((feat, i) => (
              <PromoFeature key={i} {...feat} />
            ))}
          </div>
          <div className="border-b _border-light pt-2 pb-10">
            <p className="text-sm _text-default">
              "BringIt" is owned & managed by "Bring Commerce Private Limited"
              (formerly known as Loafers Inc Private Limited) and is not
              related, linked or interconnected in whatsoever manner or nature,
              to "LOAFER.COM" which is a real estate services business operated
              by "Blackstone Consultancy Services Fake Limited".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPromotion;
