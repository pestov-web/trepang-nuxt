<script lang="ts" setup>
const cardList = [
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
      "https://www.wildberries.ru/catalog/205460593/detail.aspx?targetUrl=MS&size=330205982",
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
      "https://www.wildberries.ru/catalog/205460593/detail.aspx?targetUrl=MS&size=330205982",
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

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});

const variant = 1;
</script>

<template>
  <ul class="grid grid-cols-4 gap-5 pt-4">
    <li
      v-for="card in cardList"
      :key="card.id"
      class="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-xl bg-white transition-all hover:shadow-2xl pb-2"
    >
      <UCarousel
        v-slot="{ item }"
        :items="card.images"
        :ui="{
          item: 'snap-start overflow-hidden shadow-xl',
        }"
      >
        <img :src="item" width="294" height="240" draggable="false" />
      </UCarousel>
      <div class="flex justify-between p-2">
        <div class="flex gap-2 justify-center items-center">
          <span class="text-2xl"
            >{{ card.price - (card.price / 100) * card.discount }} ₽</span
          >
          <span class="line-through">{{ card.price + " ₽" }} </span>
        </div>
        <UBadge color="red" variant="solid">-{{ card.discount }}%</UBadge>
      </div>
      <h2 class="px-2">{{ card.name }}</h2>
      <div class="flex flex-col gap-2 col-span-2 p-2">
        <UButton
          :to="card.wbUrl"
          target="_blank"
          class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700"
          block
          >Купить на Wildberries</UButton
        >
        <UDivider label="или" />
        <UButton class="transition-all" block>Заказать на сайте</UButton>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.decor {
  text-decoration: none;
}
</style>
