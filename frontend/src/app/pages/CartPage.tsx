import { Link } from 'react-router';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const { t } = useLanguage();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300" />
            <h1 className="text-4xl">{t('cartEmpty')}</h1>
            <p className="text-xl text-gray-600">
              {t('cartEmptyDesc')}
            </p>
            <Link
              to="/catalog"
              className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
            >
              {t('goToCatalog')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl mb-12">{t('cart')}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="text-xl hover:text-gray-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-gray-600 mt-1">
                          {t('size')}: {item.selectedSize} • {t('color')}: {item.selectedColor}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-2xl">
                        {(item.price * item.quantity).toLocaleString()} {t('tjs')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24 space-y-6">
              <h2 className="text-2xl">{t('total')}</h2>

              <div className="space-y-4 border-t border-b border-gray-200 py-6">
                <div className="flex items-center justify-between text-gray-600">
                  <span>{t('items')} ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                  <span>{getTotalPrice().toLocaleString()} {t('tjs')}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>{t('delivery')}</span>
                  <span>{t('free')}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-2xl">
                <span>{t('total')}:</span>
                <span>{getTotalPrice().toLocaleString()} {t('tjs')}</span>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-black text-white text-center py-4 rounded-full hover:bg-gray-800 transition-colors"
              >
                {t('checkout')}
              </Link>

              <Link
                to="/catalog"
                className="block w-full text-center py-4 rounded-full border-2 border-gray-300 hover:border-black transition-colors"
              >
                {t('continueShopping')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
