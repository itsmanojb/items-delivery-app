import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandView from './pages/BrandView';
import CategoryView from './pages/CategoryView';
import DealView from './pages/DealView';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProductView from './pages/ProductView';

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/category/:cn" element={<CategoryView />} />
      <Route path="/brand/:bn" element={<BrandView />} />
      <Route path="/deals/:dn" element={<DealView />} />
      <Route path="/product/:prn" element={<ProductView />} />
    </Routes>
  );
};
function App() {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
}

export default App;
