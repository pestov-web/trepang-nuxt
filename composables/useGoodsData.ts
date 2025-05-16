const goodsList = [
  {
    id: 1,
    name: "Трепанг на меду",
    description: "",
    list: [],
    wbUrl: "https://www.wildberries.ru/catalog/250511457/detail.aspx",
    price: 2800,
    discount: 0, // в процентах
    slug: "",
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
    description: "",
    list: [],
    wbUrl:
      "https://www.wildberries.ru/catalog/256311216/detail.aspx?targetUrl=EX",
    price: 5000,
    discount: 0, // в процентах
    slug: "",
    images: [
      "/images/goods/dp2.webp",
      "/images/goods/dp2-2.webp",
      "/images/goods/dp2-3.webp",
      "/images/goods/dp2-4.webp",
      "/images/goods/dp2-5.webp",
      "/images/goods/dp2-6.webp",
    ],
  },
  {
    id: 3,
    name: "Экстракт трепанга",
    description: "",
    list: [],
    wbUrl:
      "https://www.wildberries.ru/catalog/250540124/detail.aspx?targetUrl=EX",
    price: 1200,
    discount: 0, // в процентах
    slug: "",
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
    description: "",
    list: [],
    price: 2700,
    discount: 0, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/256315343/detail.aspx?targetUrl=EX",
    slug: "",
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
    description: "",
    list: [],
    price: 30500,
    discount: 0, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/268048494/detail.aspx?targetUrl=EX",
    slug: "",
    images: ["/images/goods/dp5.webp", "/images/goods/dp5-2.webp"],
  },
  {
    id: 6,
    name: "Морской коллаген",
    description: "",
    list: [],
    price: 2200,
    discount: 0, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/250076234/detail.aspx?targetUrl=EX",
    slug: "",
    images: [
      "/images/goods/dp6.webp",
      "/images/goods/dp6-2.webp",
      "/images/goods/dp6-3.webp",
      "/images/goods/dp6-4.webp",
    ],
  },
  {
    id: 7,
    name: "Экстракт плоского ежа",
    description: "",
    list: [],
    price: 2500,
    discount: 0, // в процентах
    wbUrl:
      "https://www.wildberries.ru/catalog/261663755/detail.aspx?targetUrl=EX",
    slug: "",
    images: [
      "/images/goods/dp7-1.webp",
      "/images/goods/dp7-2.webp",
      "/images/goods/dp7-3.webp",
      "/images/goods/dp7-4.webp",
    ],
  },
  {
    id: 8,
    name: "Медвежья желчь",
    description: "",
    list: [],
    price: 2800,
    discount: 0, // в процентах
    wbUrl: "https://www.wildberries.ru/catalog/292690610/detail.aspx",
    slug: "",
    images: [
      "/images/goods/j1.webp",
      "/images/goods/j2.webp",
      "/images/goods/j3.webp",
      "/images/goods/j4.webp",
      "/images/goods/j5.webp",
      "/images/goods/j6.webp",
      "/images/goods/j7.webp",
      "/images/goods/j8.webp",
    ],
  },
  {
    id: 9,
    name: "Ламинария",
    description: "",
    list: [],
    price: 500,
    discount: 0, // в процентах
    wbUrl: "https://www.wildberries.ru/catalog/296801682/detail.aspx",
    slug: "",
    images: [
      "/images/goods/l1.webp",
      "/images/goods/l2.webp",
      "/images/goods/l3.webp",
      "/images/goods/l4.webp",
      "/images/goods/l5.webp",
      "/images/goods/l6.webp",
      "/images/goods/l7.webp",
    ],
  },
  {
    id: 10,
    name: "Восстановление печени",
    description: "",
    list: [],
    price: 2500,
    discount: 0, // в процентах
    wbUrl: "https://www.wildberries.ru/catalog/304738901/detail.aspx",
    slug: "",
    images: [
      "/images/goods/p1.webp",
      "/images/goods/p2.webp",
      "/images/goods/p3.webp",
      "/images/goods/p4.webp",
      "/images/goods/p5.webp",
      "/images/goods/p6.webp",
    ],
  },
  {
    id: 11,
    name: "Биокомплекс для желудка",
    description: "",
    list: [],
    price: 2500,
    discount: 0, // в процентах
    wbUrl: "https://www.wildberries.ru/catalog/302473681/detail.aspx",
    slug: "",
    images: [
      "/images/goods/g1.webp",
      "/images/goods/g2.webp",
      "/images/goods/g3.webp",
      "/images/goods/g4.webp",
      "/images/goods/g5.webp",
      "/images/goods/g6.webp",
    ],
  },
  {
    id: 12,
    name: "Асцидия",
    description: "",
    list: [],
    price: 2500,
    discount: 0, // в процентах
    wbUrl: "",
    slug: "",
    images: [
      "/images/goods/a1.webp",
      "/images/goods/a2.webp",
      "/images/goods/a3.webp",
      "/images/goods/a4.webp",
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
