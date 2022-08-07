import { useAppDispatch } from '../../hooks/useAppDispatch';
import { show as showModal } from '../../store/modal';
import { DiscountOffer } from '../../utils/types';
import Offers from '../../lib/data/discountOffers.json';

const DiscountCard = ({ data }: { data: DiscountOffer }) => {
  const dispatch = useAppDispatch();

  const showDiscountInfo = (): void => {
    dispatch(showModal({ data, type: 'discount' }));
  };

  return (
    <div
      className="border border-blue-600 rounded-lg min-w-[277px] cursor-pointer h-[188px] _coupon overflow-hidden flex flex-col"
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
        <button className="bg-[#1f1f1f] text-white rounded-lg font-medium lowercase text-sm leading-none px-4 py-1.5 h-7">
          {data.button_cta_text}
        </button>
      </div>
    </div>
  );
};

const DiscountOffers = () => {
  const allOffers = Offers as DiscountOffer[];

  return (
    <section>
      <h3 className="font-semibold text-2xl my-6 mx-4">Bank & Wallet Offers</h3>
      <div className="flex gap-5 pb-2 pt-4 mx-4 overflow-x-auto overflow-y-hidden">
        {allOffers?.map((offer, i) => (
          <DiscountCard key={i} data={offer} />
        ))}
      </div>
    </section>
  );
};

export default DiscountOffers;
