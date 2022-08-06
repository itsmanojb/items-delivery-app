import { Routes, Route } from 'react-router-dom';
import {
  Home,
  BrandView,
  CategoryView,
  DealView,
  ProductView,
  UserAccount,
  UserAddresses,
  UserOrders,
  Error404,
} from './pages';

const AppWithRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/category/:cn" element={<CategoryView />} />
      <Route path="/brand/:bn" element={<BrandView />} />
      <Route path="/deals/:dn" element={<DealView />} />
      <Route path="/product/:prn" element={<ProductView />} />
      <Route path="/account" element={<UserAccount />}>
        <Route path="addressess" element={<UserAddresses />} />
        <Route path="orders" element={<UserOrders />} />
      </Route>
    </Routes>
  );
};

export default AppWithRouting;
