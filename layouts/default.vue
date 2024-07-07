<script lang="ts" setup></script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
// turning off dark mode
html {
  color-scheme: light !important;
}

body {
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../public/images/bg.jpg") no-repeat center center fixed;
    filter: opacity(10%);
    z-index: -1;
  }
}
main {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
section {
  @apply flex flex-col mt-5 overflow-hidden p-0
    max-w-screen-xl rounded-xl border shadow-2xl bg-white;
}
</style>
