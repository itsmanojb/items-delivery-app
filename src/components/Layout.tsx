import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactElement;
};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
