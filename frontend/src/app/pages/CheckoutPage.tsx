import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    note: '',
    deliveryMethod: 'standard',
    paymentMethod: 'cash',
  });

  const buildTelegramMessage = (cartItems: any[], customer: any) => {
    let message = `Новый заказ с сайта\n\nТовары:\n\n`;

    cartItems.forEach((item, index) => {
      // Robust image extraction covering all requested fields
      const imageUrl = item.image ||
        item.image_url ||
        item.thumbnail ||
        (item.images && item.images[0] && (typeof item.images[0] === 'string' ? item.images[0] : item.images[0].image_url || item.images[0].image)) ||
        (item.product && (item.product.image || item.product.image_url || (item.product.images && item.product.images[0] && (typeof item.product.images[0] === 'string' ? item.product.images[0] : item.product.images[0].image_url || item.product.images[0].image)))) ||
        'нет изображения';

      message += `${index + 1}. ${item.name}\n`;
      message += `   Количество: ${item.quantity}\n`;
      message += `   Цена: ${item.price.toLocaleString()} TJS\n\n`;
      message += `Фото:\n${imageUrl}\n\n`;
    });

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingPrice = customer.deliveryMethod === 'express' ? 50 : 0;

    message += `Итого: ${(totalPrice + shippingPrice).toLocaleString()} TJS\n\n`;
    message += `Клиент:\n`;
    message += `Имя: ${customer.name}\n`;
    message += `Телефон: ${customer.phone}\n`;
    message += `Адрес: ${customer.city}, ${customer.address}\n`;
    message += `Комментарий: ${customer.note || 'Нет'}\n`;

    return message;
  };

  const sendOrderToTelegram = () => {
    const ADMIN_USERNAME = "Kas1mov_sa";
    const message = buildTelegramMessage(cart, formData);
    const encodedMessage = encodeURIComponent(message);
    const url = `https://t.me/${ADMIN_USERNAME}?text=${encodedMessage}`;

    // Debug logs as requested
    console.log("Cart:", cart);
    console.log("Telegram message:", message);
    console.log("Telegram URL:", url);

    // Redirect using location.href as requested
    window.location.href = url;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger the Telegram redirect
    sendOrderToTelegram();

    // Show success state
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (cart.length === 0 && !orderPlaced) {
    navigate('/catalog');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <CheckCircle2 className="w-24 h-24 mx-auto text-green-600" />
            <h1 className="text-4xl">Заказ подготовлен!</h1>
            <p className="text-xl text-gray-600">
              Мы открыли Telegram для отправки вашего заказа администратору.
            </p>
            <p className="text-gray-600">
              Пожалуйста, нажмите "Отправить" в Telegram, чтобы завершить оформление.
            </p>
            <p className="text-sm text-gray-400">
              Переадресация на главную...
            </p>
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
        <h1 className="text-4xl md:text-5xl mb-12">Оформление заказа</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Order Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl">Контактная информация</h2>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Имя и фамилия *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Номер телефона *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="+998 XX XXX-XX-XX"
                />
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-gray-50 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl">Адрес доставки</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Город *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Ташкент"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Адрес *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Улица, дом, квартира"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Комментарий к заказу
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Дополнительные пожелания..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Способ доставки *
                </label>
                <select
                  name="deliveryMethod"
                  value={formData.deliveryMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="standard">Стандартная доставка (1-3 дня) - Бесплатно</option>
                  <option value="express">Экспресс доставка (1 день) - 50 TJS</option>
                  <option value="pickup">Самовывоз - Бесплатно</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-50 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl">Способ оплаты</h2>

              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                    className="w-5 h-5 text-black focus:ring-black"
                  />
                  <span>Наличными при получении</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-5 h-5 text-black focus:ring-black"
                  />
                  <span>Банковской картой</span>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-24 space-y-6">
              <h2 className="text-2xl">Ваш заказ</h2>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Размер: {item.selectedSize}
                      </p>
                      <p className="text-sm">
                        {item.quantity} × {item.price.toLocaleString()} TJS
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Товары</span>
                  <span>{getTotalPrice().toLocaleString()} TJS</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Доставка</span>
                  <span>
                    {formData.deliveryMethod === 'express' ? '50 TJS' : 'Бесплатно'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-2xl font-bold border-t border-gray-200 pt-6">
                <span>Итого:</span>
                <span className="text-black">
                  {(
                    getTotalPrice() +
                    (formData.deliveryMethod === 'express' ? 50 : 0)
                  ).toLocaleString()}{' '}
                  TJS
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-all transform active:scale-95"
              >
                Оформить заказ в Telegram
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
