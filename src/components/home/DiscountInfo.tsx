import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { DiscountOffer } from '../../utils/types';

type DiscountInfoProps = {
  data: DiscountOffer | null;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DiscountInfo = ({ data, onClose }: DiscountInfoProps) => {
  const [codeCopied, setCodeCopied] = useState<boolean>(false);

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
    data && (
      <div className="relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute text-white cursor-pointer p-3 right-1 top-1"
        >
          <IoClose size={24} />
        </button>
        <div
          className="pt-12 px-5 pb-7"
          style={{ backgroundColor: data.bg_color, color: data.text_color }}
        >
          <div className="w-[156px] h-8">
            <img
              src={data.bottomsheet_image_url}
              alt=""
              className="h-full object-contain object-left w-full"
            />
          </div>
          <h5 className="mt-2 pb-2 text-2xl font-bold leading-none">
            {data.title}
          </h5>
          <p className="text-sm font-medium">{data.subtitle}</p>
          <div className="mt-2 p-4 flex items-center justify-between bg-white bg-opacity-[.045]">
            <div className="flex flex-col">
              <small className="text-xs font-medium">{data.offer?.key}</small>
              <span
                className="text-[20px] font-extrabold"
                style={{ color: data.offer_color }}
              >
                {data.offer?.value}
              </span>
            </div>
            <button
              type="button"
              onClick={(e) => copyCouponCode(e, data.offer.value)}
              className="text-[#1f1f1f] bg-white rounded-[4px] font-medium uppercase text-[15px] leading-none px-4 py-1.5 h-[42px]"
            >
              {codeCopied ? 'Copied' : data.button_cta_text}
            </button>
          </div>
        </div>
        <div className="bg-white py-2 px-4">
          <h4 className="mt-4 mb-3 text-[15px] _text-muted">
            {data.content[0].heading}
          </h4>
          <ul className="list-disc ml-4 space-y-2 mb-2">
            {data.content[0].data.map((el, i) => (
              <li key={i} className="text-xs _text-default">
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default DiscountInfo;
