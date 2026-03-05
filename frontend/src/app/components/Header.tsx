import { Link } from 'react-router';
import { ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Header() {
  const { getTotalItems } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight">BrandMans</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/catalog" className="hover:text-gray-600 transition-colors">
              {t('catalog')}
            </Link>
            <Link to="/catalog?category=jackets" className="hover:text-gray-600 transition-colors">
              {t('jackets')}
            </Link>
            <Link to="/catalog?category=tshirts" className="hover:text-gray-600 transition-colors">
              {t('tshirts')}
            </Link>
            <Link to="/catalog?category=jeans" className="hover:text-gray-600 transition-colors">
              {t('jeans')}
            </Link>
            <Link to="/catalog?category=suits" className="hover:text-gray-600 transition-colors">
              {t('suits')}
            </Link>
            <Link to="/catalog?category=shoes" className="hover:text-gray-600 transition-colors">
              {t('shoes')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-1">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-full text-sm transition-colors ${
                  language === 'ru' ? 'bg-black text-white' : 'hover:bg-gray-100'
                }`}
              >
                РУ
              </button>
              <button
                onClick={() => setLanguage('tj')}
                className={`px-2 py-1 rounded-full text-sm transition-colors ${
                  language === 'tj' ? 'bg-black text-white' : 'hover:bg-gray-100'
                }`}
              >
                ТҶ
              </button>
            </div>

            <Link to="/profile" className="hidden md:flex hover:text-gray-600 transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/cart" className="relative hover:text-gray-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200">
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
              <Globe className="w-4 h-4 text-gray-600" />
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === 'ru' ? 'bg-black text-white' : 'bg-gray-100'
                }`}
              >
                РУ
              </button>
              <button
                onClick={() => setLanguage('tj')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === 'tj' ? 'bg-black text-white' : 'bg-gray-100'
                }`}
              >
                ТҶ
              </button>
            </div>

            <Link
              to="/catalog"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('catalog')}
            </Link>
            <Link
              to="/catalog?category=jackets"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('jackets')}
            </Link>
            <Link
              to="/catalog?category=tshirts"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('tshirts')}
            </Link>
            <Link
              to="/catalog?category=jeans"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('jeans')}
            </Link>
            <Link
              to="/catalog?category=suits"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('suits')}
            </Link>
            <Link
              to="/catalog?category=shoes"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('shoes')}
            </Link>
            <Link
              to="/profile"
              className="block py-2 hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('profile')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}