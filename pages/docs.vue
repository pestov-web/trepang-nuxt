<script lang="ts" setup>
const sliderDocs = [
  {
    id: 1,
    src: "/images/docs/doc1.webp",
    alt: "Документ",
    size: { width: 450, height: 600 },
  },
  {
    id: 2,
    src: "/images/docs/doc2.webp",
    alt: "Документ",
    size: { width: 450, height: 600 },
  },
  {
    id: 3,
    src: "/images/docs/doc3.webp",
    alt: "Документ",
    size: { width: 450, height: 600 },
  },
  {
    id: 4,
    src: "/images/docs/doc4.webp",
    alt: "Документ",
    size: { width: 450, height: 600 },
  },
  {
    id: 5,
    src: "/images/docs/doc5.webp",
    alt: "Документ",
    size: { width: 450, height: 600 },
  },
];
</script>

<template>
  <section class="px-5 pt-3 pb-5 flex flex-col gap-4">
    <h2 class="text-2xl">Документы</h2>
    <UDivider />
    <div>
      <ul class="grid grid-cols-3 gap-4">
        <li
          v-for="doc in sliderDocs"
          :key="doc.id"
          class="rounded-2xl shadow-xl overflow-hidden"
        >
          <NuxtImg :src="doc.src" alt="Документ" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
