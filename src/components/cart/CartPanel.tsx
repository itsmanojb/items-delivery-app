import { IoClose } from 'react-icons/io5';
import { FiChevronRight } from 'react-icons/fi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { hideCart } from '../../store/ui';
import { CartItem, ProductItem } from '../../utils/types';
import AddToCartButton from '../shared/AddToCartButton';
import Misc from '../../lib/data/layout.json';
import SuggestedItems from './SuggestedItems';
import { shuffleItems } from '../../utils/helper';

const CartPanelItem = (props: CartItem) => {
  const { image, title, subTitle, price, mrp } = props.product;
  return (
    <div className="flex p-4 gap-4 border-t _border-muted">
      <div>
        <div className="h-[72px] w-[72px] border rounded-[4px] overflow-hidden">
          <img src={image} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="text-left flex flex-col flex-1">
        <div className="_text-default text-[15px] leading-tight mb-2">
          {title}
        </div>
        <div className="text-sm _text-muted truncate mb-3">{subTitle}</div>
        <div className="flex items-center justify-between mt-auto">
          {mrp ? (
            <div className="flex gap-2 items-center">
              <span className="text-[15px] text-black font-bold leading-none">
                ₹{price}
              </span>
              <del className="text-[14px] text-gray-500">₹{mrp}</del>
            </div>
          ) : (
            <div>
              <span className="text-[14px] _text-default">₹{price}</span>
            </div>
          )}
          <div className="h-9 w-[90px]">
            <AddToCartButton product={props.product} />
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPanel = () => {
  const dispatch = useAppDispatch();
  const { totalAmount, totalQuantity, cartItems, billAmount, discount } =
    useAppSelector((state) => state.cart);
  const productItems: any[] = Misc.filter((item) => item.type === 77).map(
    (el) => el.objects
  );
  const allProducts: ProductItem[] = [];

  productItems.forEach((obj: any) => {
    const items = obj[0].data.products.map((product: any) => product[0]);
    allProducts.push(...items);
  });
  const addedProducts = cartItems.map((item) => item.product.id);
  const otherProducts = allProducts.filter(
    (item) => !addedProducts.includes(item.product_id.toString())
  );
  const topProducts = shuffleItems(otherProducts).slice(0, 10);

  return (
    <div className="fixed inset-0 h-screen w-screen z-50 overflow-hidden p-4">
      <div
        className="absolute z-10 inset-0 bg-black bg-opacity-[.65]"
        onClick={() => dispatch(hideCart())}
      />
      <aside className="_drawer flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 bg-white flex items-center justify-between p-4">
          <h2 className="font-extrabold text-2xl _text-default">My Cart</h2>
          <IoClose
            size={24}
            className="cursor-pointer"
            onClick={() => dispatch(hideCart())}
          />
        </div>
        {totalQuantity === 0 ? (
          <div className="flex-1 bg-white p-6">
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <img src="empty-cart.webp" alt="" className="h-36 w-36" />
              <h3 className="font-bold text-lg leading-tight">
                You don't have any items in your cart
              </h3>
              <p className="text-sm _text-default mb-2">
                Your favourite items are just a click away
              </p>
              <button
                type="button"
                onClick={() => dispatch(hideCart())}
                className="bg-[#0c831f] text-white rounded-[8px] px-4 py-3 leading-none text-[13px] font-medium cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <div className="space-y-3 my-3">
                <div className="bg-white border-y _border-muted">
                  <div className="flex flex-col px-4 pt-5">
                    <div className="flex justify-between _text-muted text-xs">
                      <span>shipment of 1 of 1</span>
                      <span>{totalQuantity} items</span>
                    </div>
                    <p className="text-sm _text-default font-bold mb-1">
                      Delivery in some times
                    </p>
                  </div>
                  <div className="divide-y-1">
                    {cartItems.map((item) => (
                      <CartPanelItem key={item.product.id} {...item} />
                    ))}
                  </div>
                </div>
                <div className="bg-white">
                  <div className="font-bold text-xl text-black pt-5 px-4">
                    Before you checkout
                  </div>
                  <div className="relative px-3 my-2">
                    <SuggestedItems topItems={topProducts} />
                  </div>
                </div>
                <div className="bg-white">
                  <div className="font-bold text-xl text-black pt-5 px-4">
                    Bill Details
                  </div>
                  <div className="px-4 text-xs space-y-2 py-2">
                    <div className="flex items-start justify-between _text-default">
                      <span>MRP</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex items-start justify-between _text-default">
                      <span>Product discount</span>
                      <span>- ₹{discount}</span>
                    </div>
                    <div className="flex items-start justify-between _text-default">
                      <p className="flex flex-col">
                        <span>Delivery charge</span>
                        <span className="text-[#0c831f]">
                          Hooray! You saved ₹15 on delivery charge
                        </span>
                      </p>
                      <span>
                        ₹15 <span className="text-[#0c831f]">free</span>{' '}
                      </span>
                    </div>
                    <div className="flex items-start justify-between text-[14px] text-black font-bold py-2">
                      <span>Bill total</span>
                      <span>₹{billAmount}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t-2 bg-neutral-100 text-xs _text-muted border-b _border-muted">
                    Promo code can be applied on payments screen
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white px-4 pt-2 pb-4 min-h-[68px] _shadow_sticky">
              <div className="bg-[#0c831f] cursor-pointer text-white flex items-center px-3 py-3 rounded-[4px] font-medium text-[14px]">
                <div className="font-bold">{totalQuantity} Items</div>
                <div className="font-bold">&nbsp; &middot; &nbsp;</div>
                <div>
                  <span className="font-extrabold">₹{billAmount}</span>
                  <del className="text-sm ml-1">₹{totalAmount}</del>
                </div>
                <div className="ml-auto flex items-center font-bold">
                  Proceed <FiChevronRight size={18} className="ml-2" />
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartPanel;
