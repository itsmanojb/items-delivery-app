import React from 'react';

type Props = {};

const ProductInfoList = (props: Props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="py-4">
      <dl>
        {arr.map((item) => (
          <>
            <dt className="text-sm font-extrabold text-black mb-2">Offer</dt>
            <dd className="text-sm mb-4 _text-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, deserunt sapiente est aliquam suscipit incidunt
              consequuntur natus quo exercitationem quia.
            </dd>
          </>
        ))}
      </dl>
    </div>
  );
};

export default ProductInfoList;
