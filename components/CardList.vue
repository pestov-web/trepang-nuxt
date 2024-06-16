<script lang="ts" setup>
const cardList = [
  {
    id: 1,
    name: "Трепанг на меду",
    description:
      "Биологическая активная добавка к пище ферментативный гидролизат трепанга в желатиновых капсулах (сушенный трепанг в капсулах). Изготовлена в соответствии с документами: СТО 0147061768-001-2022",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    wbUrl:
      "https://www.wildberries.ru/catalog/205460593/detail.aspx?targetUrl=MS&size=330205982",
    price: 2500,
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
    price: 4300,
    slug: "trepang-v-kapsulah",
    images: [
      "/images/goods/dp2.webp",
      "/images/goods/dp2.webp",
      "/images/goods/dp3.webp",
      "/images/goods/dp4.webp",
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
    price: 1200,
    slug: "trepang-extract",
    images: ["/images/goods/dp3.webp"],
  },
  {
    id: 4,
    name: "Икра морского ежа",
    description: "Описание трепанга",
    list: [
      "Очень эффективен при мужской половой слабости",
      "Усиливает либидо у женщин",
    ],
    price: 2300,
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
</script>

<template>
  <ul class="grid grid-cols-2 gap-5 mt-4">
    <li
      class="p-4 rounded-2xl overflow-hidden shadow-xl bg-white transition-all hover:shadow-2xl"
      v-for="card in cardList"
      :key="card.id"
    >
      <h3 class="text-xl pb-2">{{ card.name }}</h3>
      <!-- <UDivider /> -->
      <div class="grid grid-cols-3 gap-2 cursor-pointer">
        <UCarousel
          v-slot="{ item }"
          :items="card.images"
          :ui="{ item: 'snap-start' }"
        >
          <img :src="item" width="180" height="250" draggable="false" />
        </UCarousel>
        <!-- <NuxtImg :src="card.images[0]" alt="image" class="w-full h-full" /> -->
        <p class="col-span-2">{{ card.description }}</p>
      </div>
      <UDivider class="py-4" />
      <div class="grid grid-cols-3 pt-2">
        <p class="col-span-1">{{ card.price + " ₽" }}</p>
        <div class="flex flex-col gap-2 col-span-2">
          <UButton
            :to="card.wbUrl"
            target="_blank"
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:scale-105"
            block
            >Купить на Wildberries</UButton
          >
          <UDivider label="или" />
          <UButton class="transition-all hover:scale-105" block
            >Заказать на сайте</UButton
          >
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
