<script lang="ts" setup>
import { object, string, type InferType } from "yup";
// @ts-ignore
import type { FormSubmitEvent } from "#ui/types";

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

const phoneRegExp =
  /^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

const schema = object({
  name: string().required("Необходимо ввести имя"),
  telephone: string()
    .matches(phoneRegExp, "Неверный формат номера")
    .required("Необходимо ввести номер телефона"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  telephone: undefined,
  goods: "",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  await useSendMail(event.data);
  loading.value = false;
  isOpen.value = false;
}
const loading = ref(false);
const isOpen = ref(false);
const handleBuy = (item: string) => {
  isOpen.value = true;
  state.goods = item;
};
type Card = {
  id: number;
  name: string;
  description: string;
  list: string[];
  wbUrl: string;
  price: number;
  discount: number;
  slug: string;
  images: string[];
};

const { data, error } = (await useAsyncData("goods", () =>
  Promise.resolve(useGoodsData())
)) as unknown as { data: Card[]; error: any };
</script>

<template>
  <ul
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4"
  >
    <li
      v-for="card in data"
      :key="card.id"
      class="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-xl bg-white transition-all hover:shadow-2xl pb-2"
    >
      <NuxtLink :to="card.slug">
        <UCarousel
          v-slot="{ item }"
          :items="card.images"
          :ui="{
            item: 'snap-start overflow-hidden shadow-xl max-h-[420px] sm:max-h-[392px] w-full h-full object-cover object-center',
          }"
        >
          <img :src="item" draggable="false" /> </UCarousel
      ></NuxtLink>
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

        <UButton class="transition-all" block @click="handleBuy(card.name)">
          Заказать на сайте</UButton
        >
      </div>
    </li>
  </ul>
  <UModal v-model="isOpen">
    <div class="p-4">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <h3>
          Хотите заказать <span class="font-bold">{{ state.goods }} ?</span>
        </h3>
        <p>Подтвердите заказ и с вами свяжется наш менеджер</p>
        <UFormGroup label="Ваше Имя" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Ваш Телефон" name="telephone">
          <UInput v-model="state.telephone" type="telephone" />
        </UFormGroup>

        <UButton :loading="loading" type="submit">Подтвердить заказ</UButton>
      </UForm>
    </div>
  </UModal>
</template>

<style scoped>
.decor {
  text-decoration: none;
}
</style>
