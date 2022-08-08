import React from 'react';
import { IoAddSharp, IoRemoveSharp } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addItem, removeItem } from '../../store/cart';
import { CartProduct } from '../../utils/types';

type ButtonProps = {
  product: CartProduct;
  size?: 'sm' | 'lg';
};
const AddToCartButton = ({ product, size }: ButtonProps) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const itemInCart = cartItems.filter(
    (item) => item.product.id === product.id
  )[0];
  const itemCount = itemInCart ? itemInCart.quantity : 0;

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addItem({ ...product }));
  };

  const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeItem(product.id));
  };

  const handleItemAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(
      addItem({
        ...product,
      })
    );
  };

  return itemCount > 0 ? (
    <div
      className={`flex h-full w-full justify-around rounded-lg uppercase font-bold text-sm bg-[#0c831f] cursor-pointer ${
        size === 'lg' ? 'text-lg' : 'text-normal'
      }`}
    >
      <button
        onClick={(e) => remove(e)}
        type="button"
        className="flex items-center justify-center w-8"
      >
        <IoRemoveSharp size={18} className="text-white" />
      </button>
      <span className="flex items-center justify-center text-white">
        {itemCount}
      </span>
      <button
        onClick={(e) => add(e)}
        type="button"
        className="flex items-center justify-center w-8"
      >
        <IoAddSharp size={18} className="text-white" />
      </button>
    </div>
  ) : (
    <button
      type="button"
      className={`_add_to_cart ${size === 'lg' ? 'text-md' : 'text-sm'}`}
      onClick={(e) => handleItemAdd(e)}
    >
      Add
    </button>
  );
};

export default AddToCartButton;
