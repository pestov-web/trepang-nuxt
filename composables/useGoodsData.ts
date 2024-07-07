const goodsList = [
  {
    id: 1,
    name: "Трепанг на меду",
    description:
      "Биологическая активная добавка к пище ферментативный гидролизат трепанга в желатиновых капсулах (сушенный трепанг в капсулах). Изготовлена в соответствии с документами: СТО 0147061768-001-2022",
    list: [
      "Повышение жизненного тонуса ",
      "Ускоренное обновление тканей",
      "Восстановление функции половых желез",
      "Быстрое излечение от ОРЗ и ОРВИ",
      "Улучшенная работа желудка",
      "Порядок в сердечно-сосудистой системе",
    ],
    wbUrl:
      "https://www.wildberries.ru/catalog/205460593/detail.aspx?targetUrl=MS&size=330205982",
    price: 3500,
    discount: 15, // в процентах
    slug: "trepang-na-medu",
    images: [
      "/images/goods/dp1.webp",
      "/images/goods/dp1-2.webp",
      "/images/goods/dp1-3.webp",
      "/images/goods/dp1-4.webp",
      "/images/goods/dp1-5.webp",
    ],
  },
  {
    id: 2,
    name: "Трепанг в капсулах",
    description: "Описание трепанга",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    wbUrl:
      "https://www.wildberries.ru/catalog/197867104/detail.aspx?targetUrl=MS&size=320734553",
    price: 5300,
    discount: 25, // в процентах
    slug: "trepang-v-kapsulah",
    images: [
      "/images/goods/dp2.webp",
      "/images/goods/dp2-2.webp",
      "/images/goods/dp2-3.webp",
      "/images/goods/dp2-4.webp",
      "/images/goods/dp2-5.webp",
    ],
  },
  {
    id: 3,
    name: "Экстракт трепанга",
    description: "Описание трепанга",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    wbUrl:
      "https://www.wildberries.ru/catalog/229794574/detail.aspx?targetUrl=MS",
    price: 2200,
    discount: 30, // в процентах
    slug: "trepang-extract",
    images: [
      "/images/goods/dp3.webp",
      "/images/goods/dp3-2.webp",
      "/images/goods/dp3-3.webp",
      "/images/goods/dp3-4.webp",
      "/images/goods/dp3-5.webp",
    ],
  },
  {
    id: 4,
    name: "Икра морского ежа",
    description: "Описание трепанга",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    price: 3300,
    discount: 5, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/235761419/detail.aspx?targetUrl=MS",
    slug: "ikra-morskogo-jeza",
    images: [
      "/images/goods/dp4.webp",
      "/images/goods/dp4-2.webp",
      "/images/goods/dp4-3.webp",
      "/images/goods/dp4-4.webp",
      "/images/goods/dp4-5.webp",
    ],
  },
];

export const useGoodsData = (slug?: string) => {
  // Если slug не передан, возвращаем весь массив
  if (!slug) {
    return goodsList;
  }

  // Находим объект с заданным значением slug
  const foundObject = goodsList.find((item) => item.slug === slug);

  // Возвращаем найденный объект или null, если не найдено
  return foundObject || null;
};
