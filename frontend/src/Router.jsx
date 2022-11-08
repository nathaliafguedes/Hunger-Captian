import { Route, Routes } from 'react-router-dom';
import Cart from './containers/Cart';
import Home from './containers/Home';

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
};
export default Router;
