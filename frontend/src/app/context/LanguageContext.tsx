import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'tj';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header
    catalog: 'Каталог',
    jackets: 'Куртки',
    tshirts: 'Футболки',
    jeans: 'Джинсы',
    suits: 'Костюмы',
    shoes: 'Обувь',
    accessories: 'Аксессуары',
    profile: 'Профиль',
    cart: 'Корзина',

    // Home Page
    heroTitle: 'Премиальная мужская одежда',
    heroSubtitle: 'Новая коллекция весна-лето 2026',
    viewCatalog: 'Смотреть каталог',
    categories: 'Категории',
    popularProducts: 'Популярные товары',
    newCollection: 'Новая коллекция',
    allProducts: 'Все товары',
    seeAll: 'Смотреть все',

    // Features
    fastDelivery: 'Быстрая доставка',
    fastDeliveryDesc: 'Доставка по Таджикистану 1-3 дня',
    qualityMaterials: 'Качественные материалы',
    qualityMaterialsDesc: '100% премиум качество',
    returnGuarantee: 'Гарантия возврата',
    returnGuaranteeDesc: '30 дней на возврат товара',

    // Product Card
    addToCart: 'В корзину',
    rating: 'Рейтинг',

    // Catalog Page
    filters: 'Фильтры',
    category: 'Категория',
    allItems: 'Все товары',
    price: 'Цена',
    from: 'От',
    to: 'До',
    sort: 'Сортировка',
    sortDefault: 'По умолчанию',
    sortPriceAsc: 'Цена: по возрастанию',
    sortPriceDesc: 'Цена: по убыванию',
    sortRating: 'Рейтинг',
    productsFound: 'Найдено товаров',
    noProducts: 'Товары не найдены',

    // Product Page
    home: 'Главная',
    size: 'Размер',
    color: 'Цвет',
    quantity: 'Количество',
    addToCartButton: 'Добавить в корзину',
    productAdded: 'Товар добавлен в корзину!',
    description: 'Описание',
    reviews: 'Отзывы покупателей',
    similarProducts: 'Похожие товары',
    productNotFound: 'Товар не найден',
    backToCatalog: 'Вернуться в каталог',
    selectSizeColor: 'Пожалуйста, выберите размер и цвет',

    // Cart Page
    cartEmpty: 'Корзина пуста',
    cartEmptyDesc: 'Добавьте товары из каталога, чтобы оформить заказ',
    goToCatalog: 'Перейти в каталог',
    items: 'товаров',
    total: 'Итого',
    checkout: 'Оформить заказ',
    continueShopping: 'Продолжить покупки',
    delivery: 'Доставка',
    free: 'Бесплатно',

    // Checkout Page
    checkoutTitle: 'Оформление заказа',
    contactInfo: 'Контактная информация',
    fullName: 'Имя и фамилия',
    phone: 'Номер телефона',
    deliveryAddress: 'Адрес доставки',
    city: 'Город',
    address: 'Адрес',
    deliveryMethod: 'Способ доставки',
    standardDelivery: 'Стандартная доставка (1-3 дня) - Бесплатно',
    expressDelivery: 'Экспресс доставка (1 день) - 50 TJS',
    pickup: 'Самовывоз - Бесплатно',
    paymentMethod: 'Способ оплаты',
    cashOnDelivery: 'Наличными при получении',
    bankCard: 'Банковской картой',
    onlinePayment: 'Онлайн оплата',
    yourOrder: 'Ваш заказ',
    confirmOrder: 'Подтвердить заказ',
    orderSuccess: 'Заказ успешно оформлен!',
    orderSuccessDesc: 'Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения заказа.',
    redirecting: 'Переадресация в личный кабинет...',

    // Profile Page
    personalAccount: 'Личный кабинет',
    orders: 'Заказы',
    settings: 'Настройки',
    orderHistory: 'История заказов',
    order: 'Заказ',
    orderDate: 'Дата заказа',
    orderItems: 'Товаров',
    details: 'Подробнее',
    noOrders: 'У вас пока нет заказов',
    profileInfo: 'Профиль',
    email: 'Email',
    saveChanges: 'Сохранить изменения',
    deliveryAddresses: 'Адреса доставки',
    addNewAddress: '+ Добавить новый адрес',
    notifications: 'Уведомления',
    emailNotifications: 'Email уведомления о заказах',
    smsNotifications: 'SMS уведомления',
    promotions: 'Рассылка акций и новинок',
    security: 'Безопасность',
    changePassword: 'Изменить пароль',
    delivered: 'Доставлен',
    inTransit: 'В пути',

    // Footer
    aboutUs: 'О нас',
    deliveryPayment: 'Доставка и оплата',
    returnExchange: 'Возврат и обмен',
    contacts: 'Контакты',
    allRightsReserved: 'Все права защищены',
    brandDesc: 'Премиальный интернет-магазин мужской одежды в Таджикистане',
    info: 'Информация',

    // Common
    tjs: 'TJS',
    required: '*',
  },
  tj: {
    // Header
    catalog: 'Каталог',
    jackets: 'Куртаҳо',
    tshirts: 'Футболкаҳо',
    jeans: 'Джинсҳо',
    suits: 'Костюмҳо',
    shoes: 'Пойафзол',
    accessories: 'Аксессуарҳо',
    profile: 'Профил',
    cart: 'Сабад',

    // Home Page
    heroTitle: 'Либоси мардонаи преміум',
    heroSubtitle: 'Коллексияи нави баҳор-тобистон 2026',
    viewCatalog: 'Дидани каталог',
    categories: 'Категорияҳо',
    popularProducts: 'Маҳсулоти маъмул',
    newCollection: 'Коллексияи нав',
    allProducts: 'Ҳамаи маҳсулот',
    seeAll: 'Дидани ҳама',

    // Features
    fastDelivery: 'Интиқоли тез',
    fastDeliveryDesc: 'Интиқол дар Тоҷикистон 1-3 рӯз',
    qualityMaterials: 'Маводи босифат',
    qualityMaterialsDesc: '100% сифати преміум',
    returnGuarantee: 'Кафолати баргардонидан',
    returnGuaranteeDesc: '30 рӯз барои баргардонидани мол',

    // Product Card
    addToCart: 'Ба сабад',
    rating: 'Рейтинг',

    // Catalog Page
    filters: 'Филтрҳо',
    category: 'Категория',
    allItems: 'Ҳамаи молҳо',
    price: 'Нарх',
    from: 'Аз',
    to: 'То',
    sort: 'Ҷудокунӣ',
    sortDefault: 'Бо пешфарз',
    sortPriceAsc: 'Нарх: афзоиш',
    sortPriceDesc: 'Нарх: кам кардан',
    sortRating: 'Рейтинг',
    productsFound: 'Маҳсулот ёфт шуд',
    noProducts: 'Маҳсулот ёфт нашуд',

    // Product Page
    home: 'Асосӣ',
    size: 'Андоза',
    color: 'Ранг',
    quantity: 'Миқдор',
    addToCartButton: 'Ба сабад илова кунед',
    productAdded: 'Маҳсулот ба сабад илова шуд!',
    description: 'Тавсиф',
    reviews: 'Баҳоҳои харидорон',
    similarProducts: 'Маҳсулоти монанд',
    productNotFound: 'Маҳсулот ёфт нашуд',
    backToCatalog: 'Бозгашт ба каталог',
    selectSizeColor: 'Лутфан, андоза ва рангро интихоб кунед',

    // Cart Page
    cartEmpty: 'Сабад холӣ аст',
    cartEmptyDesc: 'Барои расмӣ кардани фармоиш маҳсулотро аз каталог илова кунед',
    goToCatalog: 'Гузариш ба каталог',
    items: 'маҳсулот',
    total: 'Ҷамъ',
    checkout: 'Расмӣ кардани фармоиш',
    continueShopping: 'Идомаи харид',
    delivery: 'Интиқол',
    free: 'Ройгон',

    // Checkout Page
    checkoutTitle: 'Расмӣ кардани фармоиш',
    contactInfo: 'Маълумоти тамос',
    fullName: 'Ном ва насаб',
    phone: 'Рақами телефон',
    deliveryAddress: 'Суроғаи интиқол',
    city: 'Шаҳр',
    address: 'Суроға',
    deliveryMethod: 'Усули интиқол',
    standardDelivery: 'Интиқоли стандартӣ (1-3 рӯз) - Ройгон',
    expressDelivery: 'Интиқоли экспресс (1 рӯз) - 50 TJS',
    pickup: 'Худгирӣ - Ройгон',
    paymentMethod: 'Усули пардохт',
    cashOnDelivery: 'Нақд ҳангоми гирифтан',
    bankCard: 'Корти бонкӣ',
    onlinePayment: 'Пардохти онлайн',
    yourOrder: 'Фармоиши шумо',
    confirmOrder: 'Тасдиқи фармоиш',
    orderSuccess: 'Фармоиш бомуваффақият расмӣ шуд!',
    orderSuccessDesc: 'Ташаккур барои харид! Мо дар наздиктарин вақт бо шумо барои тасдиқи фармоиш тамос мегирем.',
    redirecting: 'Интиқол ба кабинети шахсӣ...',

    // Profile Page
    personalAccount: 'Кабинети шахсӣ',
    orders: 'Фармоишҳо',
    settings: 'Танзимот',
    orderHistory: 'Таърихи фармоишҳо',
    order: 'Фармоиш',
    orderDate: 'Санаи фармоиш',
    orderItems: 'Маҳсулот',
    details: 'Батафсил',
    noOrders: 'Шумо ҳоло фармоишҳо надоред',
    profileInfo: 'Профил',
    email: 'Email',
    saveChanges: 'Захира кардани тағйирот',
    deliveryAddresses: 'Суроғаҳои интиқол',
    addNewAddress: '+ Илова кардани суроғаи нав',
    notifications: 'Огоҳиҳо',
    emailNotifications: 'Огоҳиҳои Email дар бораи фармоишҳо',
    smsNotifications: 'Огоҳиҳои SMS',
    promotions: 'Паҳни акцияҳо ва янгиҳо',
    security: 'Бехатарӣ',
    changePassword: 'Тағйир додани парол',
    delivered: 'Интиқол дода шуд',
    inTransit: 'Дар роҳ',

    // Footer
    aboutUs: 'Дар бораи мо',
    deliveryPayment: 'Интиқол ва пардохт',
    returnExchange: 'Баргардонидан ва иваз',
    contacts: 'Тамосҳо',
    allRightsReserved: 'Ҳамаи ҳуқуқҳо ҳифз шудаанд',
    brandDesc: 'Мағозаи интернетии преміумии либоси мардона дар Тоҷикистон',
    info: 'Маълумот',

    // Common
    tjs: 'TJS',
    required: '*',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
