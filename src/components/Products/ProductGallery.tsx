import React from 'react';

type Props = {};

const ProductGallery = (props: Props) => {
  return (
    <div className="flex flex-col border-b _border-muted">
      <div className="flex justify-center">
        <img
          src="https://picsum.photos/536/354"
          className="h-[480px] w-[480px] object-contain"
          alt=""
        />
      </div>
      <div className="border-t _border-muted">
        <div className="w-[80%] mt-2.5 mb-8 mx-auto bg-red-50 h-[76px]"></div>
      </div>
    </div>
  );
};

export default ProductGallery;
