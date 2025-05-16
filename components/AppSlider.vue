<script lang="ts" setup></script>

<template>
    <div class="relative">
        <NuxtImg
            src="/images/hero/hero1.webp"
            alt="баннер продцкции"
            class="hidden sm:block w-full h-full max-h-80 max-w-7xl"
        />
        <NuxtImg
            src="/images/hero/hero_sm.webp"
            alt="баннер продцкции"
            class="sm:hidden w-full h-full max-w-7xl object-cover"
        />
        <NuxtLink
            to="https://www.wildberries.ru/brands/311125909-doktor-pang"
            target="_blank"
            class="absolute text-white text-xs sm:text-base rounded-lg p-2 sm:p-4 bottom-20 sm:bottom-32 left-1/2 -translate-x-1/2 bg-blue-500 transition-all hover:scale-105"
            >Мы на OZON</NuxtLink
        >
        <NuxtLink
            to="https://www.wildberries.ru/brands/311125909-doktor-pang"
            target="_blank"
            class="absolute text-white text-xs sm:text-base rounded-lg p-2 sm:p-4 bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:scale-105"
            >Мы на Wildberries</NuxtLink
        >
    </div>
</template>

<style scoped></style>
