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
      "https://www.wildberries.ru/catalog/250511457/detail.aspx?targetUrl=EX",
    price: 7399,
    discount: 63, // в процентах
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
    price: 5999,
    discount: 21, // в процентах
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
      "https://www.wildberries.ru/catalog/250540124/detail.aspx?targetUrl=EX",
    price: 2700,
    discount: 50, // в процентах
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
    price: 3899,
    discount: 35, // в процентах
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
  {
    id: 5,
    name: "Трепанг сушеный",
    description: "Описание трепанга",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    price: 30500,
    discount: 0, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/242830143/detail.aspx?targetUrl=GP",
    slug: "trepang-sushenyu",
    images: ["/images/goods/dp5.webp", "/images/goods/dp5-2.webp"],
  },
  {
    id: 6,
    name: "Морской коллаген",
    description: "Морской коллаген в капсулах 200 штук",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    price: 5999,
    discount: 60, // в процентах
    wbUrl: "https://www.wildberries.ru/catalog/250076234/detail.aspx",
    slug: "trepang-sushenyu",
    images: [
      "/images/goods/dp6.webp",
      "/images/goods/dp6-2.webp",
      "/images/goods/dp6-3.webp",
      "/images/goods/dp6-4.webp",
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
