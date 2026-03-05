export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Классическая кожаная куртка',
    price: 2499,
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1766103809717-f57039c6d0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjBqYWNrZXQlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzI1ODQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1766103809717-f57039c6d0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjBqYWNrZXQlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzI1ODQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1602700205182-923ff4b8e643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZmFzaGlvbiUyMG1vZGVsJTIwbGVhdGhlciUyMGphY2tldHxlbnwxfHx8fDE3NzI1ODQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwd2ludGVyJTIwY29hdCUyMGphY2tldHxlbnwxfHx8fDE3NzI1ODQ0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Премиальная кожаная куртка из натуральной кожи высшего качества. Классический дизайн, который никогда не выходит из моды. Идеально подходит для создания элегантного образа.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Коричневый'],
    rating: 4.8,
    reviews: [
      {
        id: '1',
        author: 'Фарход М.',
        rating: 5,
        comment: 'Отличное качество кожи, сидит идеально!',
        date: '2026-02-15',
      },
      {
        id: '2',
        author: 'Рустам А.',
        rating: 4,
        comment: 'Очень стильная куртка, доставка быстрая.',
        date: '2026-02-20',
      },
    ],
  },
  {
    id: '2',
    name: 'Бомбер Premium',
    price: 1899,
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1684853731190-7a1d84fe5ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYm9tYmVyJTIwamFja2V0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzI1ODQ0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1684853731190-7a1d84fe5ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYm9tYmVyJTIwamFja2V0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NzI1ODQ0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Современный бомбер в стиле streetwear. Легкий, удобный и стильный.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный', 'Синий', 'Зеленый'],
    rating: 4.5,
    reviews: [],
  },
  {
    id: '3',
    name: 'Базовая белая футболка',
    price: 399,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1603251605029-3fd7c9513c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwd2hpdGUlMjB0c2hpcnQlMjBjYXN1YWx8ZW58MXx8fHwxNzcyNTg0NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1603251605029-3fd7c9513c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwd2hpdGUlMjB0c2hpcnQlMjBjYXN1YWx8ZW58MXx8fHwxNzcyNTg0NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Классическая белая футболка из премиального хлопка. Базовый элемент гардероба.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Белый', 'Черный', 'Серый'],
    rating: 4.7,
    reviews: [],
  },
  {
    id: '4',
    name: 'Черная футболка Premium',
    price: 499,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjB0c2hpcnQlMjBiYXNpY3xlbnwxfHx8fDE3NzI1ODQ0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjB0c2hpcnQlMjBiYXNpY3xlbnwxfHx8fDE3NzI1ODQ0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Стильная черная футболка премиум качества.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Черный'],
    rating: 4.6,
    reviews: [],
  },
  {
    id: '5',
    name: 'Классические синие джинсы',
    price: 1299,
    category: 'jeans',
    image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmx1ZSUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmx1ZSUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Классические джинсы из качественного денима. Универсальный стиль для любого случая.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: ['Синий', 'Черный'],
    rating: 4.8,
    reviews: [],
  },
  {
    id: '6',
    name: 'Премиальный костюм',
    price: 4999,
    category: 'suits',
    image: 'https://images.unsplash.com/photo-1768696082783-4313d98341ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc3VpdCUyMGZvcm1hbCUyMHdlYXJ8ZW58MXx8fHwxNzcyNTIxMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1768696082783-4313d98341ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc3VpdCUyMGZvcm1hbCUyMHdlYXJ8ZW58MXx8fHwxNzcyNTIxMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Элегантный костюм премиум класса для особых случаев. Безупречный крой и качество.',
    sizes: ['46', '48', '50', '52', '54'],
    colors: ['Черный', 'Темно-синий', 'Серый'],
    rating: 5.0,
    reviews: [],
  },
  {
    id: '7',
    name: 'Кожаные ботинки',
    price: 1799,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGVhdGhlciUyMHNob2VzJTIwYm9vdHN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGVhdGhlciUyMHNob2VzJTIwYm9vdHN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Стильные кожаные ботинки ручной работы. Комфорт и элегантность.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Коричневый', 'Черный'],
    rating: 4.7,
    reviews: [],
  },
  {
    id: '8',
    name: 'Спортивные кроссовки',
    price: 1499,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc25lYWtlcnMlMjBzaG9lcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyNTg0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1618153478389-b2ed8de18ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc25lYWtlcnMlMjBzaG9lcyUyMGZhc2hpb258ZW58MXx8fHwxNzcyNTg0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Современные кроссовки для активного образа жизни.',
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Белый', 'Черный'],
    rating: 4.5,
    reviews: [],
  },
  {
    id: '9',
    name: 'Кожаный ремень',
    price: 599,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1664286074240-d7059e004dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGVhdGhlciUyMGJlbHQlMjBhY2Nlc3Nvcnl8ZW58MXx8fHwxNzcyNTg0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1664286074240-d7059e004dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGVhdGhlciUyMGJlbHQlMjBhY2Nlc3Nvcnl8ZW58MXx8fHwxNzcyNTg0NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Элегантный кожаный ремень с классической пряжкой.',
    sizes: ['90', '95', '100', '105'],
    colors: ['Черный', 'Коричневый'],
    rating: 4.6,
    reviews: [],
  },
  {
    id: '10',
    name: 'Набор аксессуаров',
    price: 1299,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1724318496828-3438b8c7f32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYWNjZXNzb3JpZXMlMjB3YXRjaCUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1724318496828-3438b8c7f32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYWNjZXNzb3JpZXMlMjB3YXRjaCUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Стильный набор аксессуаров для современного мужчины.',
    sizes: ['One Size'],
    colors: ['Черный'],
    rating: 4.4,
    reviews: [],
  },
  {
    id: '11',
    name: 'Зимнее пальто',
    price: 3499,
    category: 'jackets',
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwd2ludGVyJTIwY29hdCUyMGphY2tldHxlbnwxfHx8fDE3NzI1ODQ0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwd2ludGVyJTIwY29hdCUyMGphY2tldHxlbnwxfHx8fDE3NzI1ODQ0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Теплое зимнее пальто премиум качества.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Черный', 'Серый'],
    rating: 4.9,
    reviews: [],
  },
  {
    id: '12',
    name: 'Поло премиум',
    price: 799,
    category: 'tshirts',
    image: 'https://images.unsplash.com/photo-1760287363713-a864ca9b1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwcG9sbyUyMHNoaXJ0JTIwY2FzdWFsfGVufDF8fHx8MTc3MjU4NDQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760287363713-a864ca9b1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwcG9sbyUyMHNoaXJ0JTIwY2FzdWFsfGVufDF8fHx8MTc3MjU4NDQzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Элегантное поло из качественного хлопка.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Черный', 'Синий'],
    rating: 4.5,
    reviews: [],
  },
];

export const categories = [
  { id: 'jackets', name: 'Куртки', image: 'https://images.unsplash.com/photo-1766103809717-f57039c6d0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjBqYWNrZXQlMjBjbG90aGluZ3xlbnwxfHx8fDE3NzI1ODQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'tshirts', name: 'Футболки', image: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmxhY2slMjB0c2hpcnQlMjBiYXNpY3xlbnwxfHx8fDE3NzI1ODQ0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'jeans', name: 'Джинсы', image: 'https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYmx1ZSUyMGplYW5zJTIwZGVuaW18ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'suits', name: 'Костюмы', image: 'https://images.unsplash.com/photo-1768696082783-4313d98341ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc3VpdCUyMGZvcm1hbCUyMHdlYXJ8ZW58MXx8fHwxNzcyNTIxMDI1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'shoes', name: 'Обувь', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwbGVhdGhlciUyMHNob2VzJTIwYm9vdHN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 'accessories', name: 'Аксессуары', image: 'https://images.unsplash.com/photo-1724318496828-3438b8c7f32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwYWNjZXNzb3JpZXMlMjB3YXRjaCUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzcyNTg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
];