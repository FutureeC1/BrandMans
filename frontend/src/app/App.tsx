import { RouterProvider } from 'react-router';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { router } from './routes';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LanguageProvider>
  );
}