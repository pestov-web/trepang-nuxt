<script lang="ts" setup></script>

<template>
  <header class="flex items-center justify-center">
    <div
      class="flex max-w-screen-xl w-full h-28 items-center justify-between shadow-xl rounded-b-xl bg-white px-5"
    >
      <AppLogo />
      <AppNav />
      <div class="flex items-center gap-4">
        <div
          class="flex items-center gap-3 cursor-pointer transition-all hover:scale-105"
        >
          <Icon name="material-symbols:call" color="black" />
          <span class="text-lg">+7 902 055 55 52</span>
        </div>

        <button>Заказать звонок</button>
      </div>
    </div>
  </header>
</template>
