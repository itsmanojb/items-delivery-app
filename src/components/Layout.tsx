import Header from './Header';
import Footer from './Footer';
import BrandPromotion from './BrandPromotion';
import CartButtonBig from './cart/CartButtonBig';
import Modal from './Modal';
import { CartPanel } from './cart';
import { useAppSelector } from '../hooks/useAppSelector';

type Props = {
  children: React.ReactElement;
};

const Layout = (props: Props) => {
  const modalShown = useAppSelector((state) => state.modal.visible);
  const cartShown = useAppSelector((state) => state.ui.cartPanel);

  return (
    <>
      <div>
        <Header />
        <main className="pt-28 sm:pt-24">{props.children}</main>
        <BrandPromotion />
        <Footer />
        <CartButtonBig />
      </div>
      {cartShown && <CartPanel />}
      {modalShown && <Modal />}
    </>
  );
};

export default Layout;
