import BrandPromotion from './BrandPromotion';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactElement;
};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <main className="pt-24">{props.children}</main>
      <BrandPromotion />
      <Footer />
    </div>
  );
};

export default Layout;
