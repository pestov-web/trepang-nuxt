<script lang="ts" setup>
const sliderProductionImages = [
  {
    id: 1,
    src: "/images/slider/slider1.webp",
    thumbnail: "/images/slider/slider1_small.webp",
    alt: "Картинка кпроизводства 1",
    size: { width: 450, height: 600 },
  },
  {
    id: 2,
    src: "/images/slider/slider2.webp",
    thumbnail: "/images/slider/slider2_small.webp",
    alt: "Картинка кпроизводства 2",
    size: { width: 700, height: 525 },
  },
  {
    id: 3,
    src: "/images/slider/slider3.webp",
    thumbnail: "/images/slider/slider3_small.webp",
    alt: "Картинка кпроизводства 3",
    size: { width: 450, height: 600 },
  },
  {
    id: 4,
    src: "/images/slider/slider4.webp",
    thumbnail: "/images/slider/slider4_small.webp",
    alt: "Картинка кпроизводства 4",
    size: { width: 346, height: 600 },
  },
  {
    id: 5,
    src: "/images/slider/slider5.webp",
    thumbnail: "/images/slider/slider5_small.webp",
    alt: "Картинка кпроизводства 5",
    size: { width: 462, height: 600 },
  },
  {
    id: 6,
    src: "/images/slider/slider6.webp",
    thumbnail: "/images/slider/slider6_small.webp",
    alt: "Картинка кпроизводства 6",
    size: { width: 462, height: 600 },
  },
  {
    id: 7,
    src: "/images/slider/slider7.webp",
    thumbnail: "/images/slider/slider7_small.webp",
    alt: "Картинка кпроизводства 7",
    size: { width: 346, height: 600 },
  },
  {
    id: 8,
    src: "/images/slider/slider8.webp",
    thumbnail: "/images/slider/slider8_small.webp",
    alt: "Картинка кпроизводства 8",
    size: { width: 700, height: 420 },
  },
  {
    id: 9,
    src: "/images/slider/slider9.webp",
    thumbnail: "/images/slider/slider9_small.webp",
    alt: "Картинка кпроизводства 9",
    size: { width: 450, height: 600 },
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
  <section class="px-5 pt-3 pb-5 flex flex-col gap-4">
    <h1 class="text-2xl">О нас</h1>
    <UDivider />
    <p class="">
      Наша компания «Доктор Панг» ИП Вороной С.В. разработала новый рецепт
      приготовления ферментативного гидролизата трепанга в капсулах, по
      специальной технологии с использованием вакуумной сушки, где сохраняются
      все полезные вещества и повышается процент усвоения организмом данного
      продукта, Мы предлагаем Вашему вниманию продукцию собственного
      производства – пищевой продукт «Доктор Панг» ферментативный гидролизат
      трепанга в капсулах. Наша продукция имеет всю необходимую разрешительную
      документацию для реализации продукта через аптечные сети, интернет
      магазины, прошла многочисленные клинические испытания в институтах
      Владивостока, хорошо знакома потребителям некоторых регионов России.
      Компания «Доктор Панг» добилась как из этого уникального морепродукта
      создать препарат, в котором бы полностью сохранились все его целебные
      качества. И не просто сохранились, а усвоились организмом на 100%. Нами
      была, была разработана новая уникальная технология производства «Доктор
      Панга» ферментативного гидролизата трепанга в капсулах, которая полностью
      исключает термическую обработку, а благодаря процессу вакуумной сушки
      сохраняются все микроэлементы, витамины и минеральные вещества. «Доктор
      Панг» не имеет аналогов и представляет собой продукт премиум класса по
      всем основным показателям. Наш продукт упакован, полимерная банка белого
      цвета, продукция ООО «Арт Лайф». А также продукт представлен в удобной для
      потребления форме: порошок в капсулах (по 250мл. в каждой) 90 капсул 1
      упаковка, , который рекомендуется применять два- три раза в день, по 1
      капсуле (таблетки) перед едой на тощяк. Важно также отметить, что данный
      продукт не является лекарством, он лишь опосредованно, через оптимизацию
      состава пищи может обусловливать оздоровительное действие.
    </p>
  </section>
  <section class="px-5 pt-3 pb-5 flex flex-col gap-4">
    <h2 class="text-2xl">
      Мы производим нашу продукцию из настоящего живого трепанга
    </h2>
    <UDivider />

    <UCarousel
      v-slot="{ item }"
      :items="sliderProductionImages"
      :ui="{ item: 'snap-start', container: 'flex gap-4' }"
      class="overflow-hidden rounded-xl"
      arrows
    >
      <img
        class="h-[300px] w-[366px] rounded-2xl"
        :src="item.thumbnail"
        width="450"
        height="600"
        draggable="false"
      />
    </UCarousel>
  </section>
</template>

<style scoped></style>
