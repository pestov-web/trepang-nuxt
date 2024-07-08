<script setup>
provideHeadlessUseId(() => useId());
useHead({
  title: "Доктор Панг",
  meta: [
    {
      name: "Дальневосточный трепанг на меду и в капсулах",
      content: "трепанг на меду, в капсулах, сушеный",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
