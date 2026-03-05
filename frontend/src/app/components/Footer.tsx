import { Link } from 'react-router';
import { Truck, Shield, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1E1E1E] text-white mt-24">
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">{t('fastDelivery')}</h3>
            <p className="text-gray-400">{t('fastDeliveryDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">{t('qualityMaterials')}</h3>
            <p className="text-gray-400">{t('qualityMaterialsDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h3 className="text-xl mb-2">{t('returnGuarantee')}</h3>
            <p className="text-gray-400">{t('returnGuaranteeDesc')}</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div>
            <h4 className="text-xl font-bold mb-4">BrandMans</h4>
            <p className="text-gray-400 text-sm">
              {t('brandDesc')}
            </p>
          </div>
          <div>
            <h4 className="mb-4">{t('categories')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/catalog?category=jackets" className="hover:text-white transition-colors">
                  {t('jackets')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=tshirts" className="hover:text-white transition-colors">
                  {t('tshirts')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=jeans" className="hover:text-white transition-colors">
                  {t('jeans')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=suits" className="hover:text-white transition-colors">
                  {t('suits')}
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=shoes" className="hover:text-white transition-colors">
                  {t('shoes')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">{t('info')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('deliveryPayment')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('returnExchange')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t('contacts')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4">{t('contacts')}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>+992 XX XXX-XX-XX</li>
              <li>info@brandmans.tj</li>
              <li>г. Душанбе, Таджикистан</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 BrandMans. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}