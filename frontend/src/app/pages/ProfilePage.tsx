import { useState } from 'react';
import { User, Package, Settings, ChevronRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'settings'>('orders');

  const mockOrders: Order[] = [
    {
      id: '10234',
      date: '2026-03-01',
      status: 'Доставлен',
      total: 3499,
      items: 2,
    },
    {
      id: '10235',
      date: '2026-03-03',
      status: 'В пути',
      total: 1299,
      items: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl mb-12">Личный кабинет</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="bg-gray-50 rounded-lg p-4 space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'orders'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5" />
                  <span>Заказы</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span>Профиль</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5" />
                  <span>Настройки</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h2 className="text-3xl">История заказов</h2>

                {mockOrders.length > 0 ? (
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                              <h3 className="text-xl">Заказ #{order.id}</h3>
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  order.status === 'Доставлен'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-blue-100 text-blue-800'
                                }`}
                              >
                                {order.status}
                              </span>
                            </div>
                            <p className="text-gray-600">
                              Дата заказа: {new Date(order.date).toLocaleDateString('ru-RU')}
                            </p>
                            <p className="text-gray-600">Товаров: {order.items}</p>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <p className="text-2xl">{order.total.toLocaleString()} TJS</p>
                            <button className="text-sm text-gray-600 hover:text-black transition-colors">
                              Подробнее →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-12 text-center">
                    <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-xl text-gray-600">
                      У вас пока нет заказов
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                <h2 className="text-3xl">Профиль</h2>

                <div className="bg-gray-50 rounded-lg p-8 space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">Иван Иванов</h3>
                      <p className="text-gray-600">ivan@example.com</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Имя и фамилия
                      </label>
                      <input
                        type="text"
                        defaultValue="Иван Иванов"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="ivan@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-600 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        defaultValue="+992 XX XXX-XX-XX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>

                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <h2 className="text-3xl">Настройки</h2>

                <div className="bg-gray-50 rounded-lg p-8 space-y-6">
                  <div>
                    <h3 className="text-xl mb-4">Адреса доставки</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="mb-2">г. Душанбе</p>
                        <p className="text-sm text-gray-600">
                          ул. Примерная, д. 1, кв. 10
                        </p>
                      </div>
                      <button className="text-black hover:text-gray-600 transition-colors">
                        + Добавить новый адрес
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl mb-4">Уведомления</h3>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-5 h-5"
                        />
                        <span>Email уведомления о заказах</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-5 h-5"
                        />
                        <span>SMS уведомления</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-5 h-5"
                        />
                        <span>Рассылка акций и новинок</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl mb-4">Безопасность</h3>
                    <button className="text-black hover:text-gray-600 transition-colors">
                      Изменить пароль
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
