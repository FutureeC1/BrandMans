import { createBrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProfilePage from './pages/ProfilePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/catalog',
    Component: CatalogPage,
  },
  {
    path: '/product/:id',
    Component: ProductPage,
  },
  {
    path: '/cart',
    Component: CartPage,
  },
  {
    path: '/checkout',
    Component: CheckoutPage,
  },
  {
    path: '/profile',
    Component: ProfilePage,
  },
]);
