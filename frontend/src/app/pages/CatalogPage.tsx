import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal, Loader2 } from 'lucide-react';
import { api, Product, Category } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

export default function CatalogPage() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const selectedCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Adjusted for TJS

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await api.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const params: any = {
          min_price: priceRange[0].toString(),
          max_price: priceRange[1].toString(),
        };

        if (selectedCategory !== 'all') {
          params.category__slug = selectedCategory;
        }

        if (sortBy !== 'default') {
          if (sortBy === 'price-asc') params.ordering = 'price';
          if (sortBy === 'price-desc') params.ordering = '-price';
        }

        const data = await api.getProducts(params);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [selectedCategory, sortBy, priceRange]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl">{t('catalog')}</h1>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>{t('filters')}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`md:w-64 space-y-8 ${filtersOpen ? 'block' : 'hidden md:block'}`}>
            {/* Categories */}
            <div>
              <h3 className="text-lg mb-4">{t('category')}</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'all'
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                    }`}
                >
                  {t('allItems')}
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.slug)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.slug
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-lg mb-4">{t('price')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder={t('from')}
                  />
                  <span>—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder={t('to')}
                  />
                </div>
              </div>
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-lg mb-4">{t('sort')}</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="default">{t('sortDefault')}</option>
                <option value="price-asc">{t('sortPriceAsc')}</option>
                <option value="price-desc">{t('sortPriceDesc')}</option>
                <option value="rating">{t('sortRating')}</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="w-12 h-12 animate-spin text-black" />
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  {t('productsFound')}: {filteredProducts.length}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product as any} />
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="text-center py-16 text-gray-400">
                    <p className="text-xl">{t('noProducts')}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}