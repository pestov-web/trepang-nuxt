<script lang="ts" setup>
const route = useRoute();

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
  Promise.resolve(useGoodsData(route.params.slug as string))
)) as unknown as { data: Card; error: any };

const currentImage = ref("");
</script>

<template>
  <section class="py-2">
    <UButton class="max-w-fit m-4">Назад</UButton>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="h-[560px] rounded-lg mb-4 flex">
            <NuxtImg
              class="h-full object-cover"
              :src="currentImage || data.images[0]"
              alt="Product Image"
            />
            <ul>
              <li v-for="image in data.images" :key="image">
                <NuxtImg
                  class="h-[112px] object-cover border cursor-pointer"
                  :src="image"
                  alt="Product Image"
                  @hover="currentImage = image"
                  @click="currentImage = image"
                />
              </li>
            </ul>
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-1/2 px-2">
              <UButton
                :to="data.wbUrl"
                target="_blank"
                class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700"
                block
                >Купить на Wildberries</UButton
              >
            </div>
            <div class="w-1/2 px-2">
              <button
                class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {{ data.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {{ data.description }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >Цена:</span
              >
              <span class="text-gray-600 dark:text-gray-300">{{
                data.price
              }}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300">:</span>
              <span class="text-gray-600 dark:text-gray-300">In Stock</span>
            </div>
          </div>

          <div>
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Product Description:</span
            >
            <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
              Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
              vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
              nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
              lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
              nisl suscipit, nec tincidunt mi consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
