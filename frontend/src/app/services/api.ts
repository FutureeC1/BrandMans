const BASE_URL = 'http://VITE_API_URL=https://zestful-betty-baveehub-f85022f4.koyeb.app/api/catalog';

export interface Product {
  id: string | number;
  name: string;
  name_uz?: string;
  price: number;
  category_slug: string;
  image: string;
  slug: string;
  is_new: boolean;
  rating: number;
  description?: string;
  images?: { image_url: string; alt: string }[];
  sizes?: { size: string }[];
}

export interface Category {
  id: number;
  name: string;
  name_uz: string;
  slug: string;
}

export const api = {
  async getProducts(params?: Record<string, string>) {
    const url = new URL(`${BASE_URL}/products/`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) url.searchParams.append(key, value);
      });
    }
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.results as Product[];
  },

  async getProductBySlug(slug: string) {
    const response = await fetch(`${BASE_URL}/products/${slug}/`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json() as Product;
  },

  async getCategories() {
    const response = await fetch(`${BASE_URL}/categories/`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data.results as Category[];
  }
};
