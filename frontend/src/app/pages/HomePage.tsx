import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Loader2 } from 'lucide-react';
import { api, Product, Category } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          api.getProducts({ page_size: '4' }),
          api.getCategories()
        ]);
        setPopularProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to load home data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-black" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-[#1E1E1E] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1602700205182-923ff4b8e643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZmFzaGlvbiUyMG1vZGVsJTIwbGVhdGhlciUyMGphY2tldHxlbnwxfHx8fDE3NzI1ODQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {t('heroSubtitle')}
            </p>
            <Link
              to="/catalog"
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              <span>{t('viewCatalog')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">{t('categories')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog?category=${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                {/* Fallback to a placeholder if no image is provided by API yet */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">{category.name}</span>
                </div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-center text-lg group-hover:text-gray-600 transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-24 bg-gray-50">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl">{t('popularProducts')}</h2>
          <Link
            to="/catalog"
            className="hidden md:flex items-center space-x-2 hover:text-gray-600 transition-colors"
          >
            <span>{t('allProducts')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}