import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Star, Minus, Plus, ShoppingCart, Loader2 } from 'lucide-react';
import { api, Product } from '../services/api';
import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams(); // Note: id is used as slug in routes
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await api.getProductBySlug(id);
        setProduct(data);

        // Load related products (same category)
        const related = await api.getProducts({
          category__slug: data.category_slug,
          page_size: '4'
        });
        setRelatedProducts(related.filter(p => p.id !== data.id));
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-black" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl mb-8">Товар не найден</h1>
          <Link
            to="/catalog"
            className="inline-block bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Вернуться в каталог
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Пожалуйста, выберите размер');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToCart(product as any, selectedSize, selectedColor || 'One Color');
    }

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const productImages = product.images?.length
    ? product.images.map(img => img.image_url)
    : [product.image];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-black">
            Главная
          </Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-black">
            Каталог
          </Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-300'
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg">{product.rating}</span>
                </div>
              </div>
              <p className="text-5xl mb-8">{product.price.toLocaleString()} TJS</p>
            </div>

            <div className="space-y-6">
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg mb-3">Размер</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((sizeObj) => (
                      <button
                        key={sizeObj.size}
                        onClick={() => setSelectedSize(sizeObj.size)}
                        className={`px-6 py-3 border-2 rounded-lg transition-colors ${selectedSize === sizeObj.size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-black'
                          }`}
                      >
                        {sizeObj.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg mb-3">Количество</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-2xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-black transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors text-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>Добавить в корзину</span>
              </button>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                  Товар добавлен в корзину!
                </div>
              )}
            </div>

            {/* Description */}
            <div className="border-t pt-8">
              <h3 className="text-xl mb-4">Описание</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product as any} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
