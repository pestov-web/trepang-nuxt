<script lang="ts" setup>
const navMenu = [
  { name: "Главная", link: "/" },
  { name: "Трепанг", link: "/trepang" },
  { name: "О нас", link: "/about" },
  { name: "Доставка", link: "/delivery" },
];
</script>

<template>
  <nav>
    <ul class="flex gap-5 list-none h-7 text-sm lg:text-base">
      <li
        v-for="item in navMenu"
        :key="item.name"
        class="relative flex items-center h-full"
      >
        <NuxtLink
          class="nav__link"
          activeClass="nav__link_active"
          :to="item.link"
        >
          {{ item.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@keyframes grow {
  0% {
    width: 5%;
  }
  100% {
    width: 100%;
  }
}

.nav__link {
  &:hover {
    &::after {
      content: "";
      border-bottom: 2px solid;

      display: block;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      animation: grow 0.7s ease;
    }
  }
  &_active {
    &::after {
      content: "";
      border-bottom: 2px solid;

      display: block;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
