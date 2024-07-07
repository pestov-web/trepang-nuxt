<script lang="ts" setup>
// @ts-ignore
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
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
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  await useSendMail(event.data);
  loading.value = false;
  isOpen.value = false;
}
const isOpen = ref(false);
const isSlideOverOpen = ref(false);
const loading = ref(false);

const navMenu = useNavList();
</script>

<template>
  <header class="flex items-center justify-center">
    <div
      class="flex max-w-screen-xl w-full h-14 md:h-20 lg:h-28 items-center justify-between shadow-xl xl:rounded-b-xl bg-white px-5"
    >
      <AppLogo />
      <AppNav class="hidden md:flex" />
      <div class="flex items-center gap-4">
        <NuxtLink
          to="https://api.whatsapp.com/send/?phone=79020555552&text&type=phone_number&app_absent=0"
          class="flex items-center gap-3 justify-center cursor-pointer transition-all hover:scale-105"
          target="_blank"
        >
          <Icon name="logos:whatsapp-icon" color="black" class="text-3xl" />
          <span @click="isOpen = true" class="text-xl font-bold hidden lg:block"
            >+7 902 055 55 52</span
          >
        </NuxtLink>

        <UButton class="hidden md:block" label="CallBack" @click="isOpen = true"
          >Заказать звонок</UButton
        >
        <UButton
          class="md:hidden"
          variant="ghost"
          label="Menu"
          @click="isSlideOverOpen = true"
          ><Icon
            name="material-symbols:menu-rounded"
            color="black"
            class="text-3xl"
        /></UButton>
      </div>
    </div>
    <UModal v-model="isOpen" :ui="{ container: 'items-start' }">
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormGroup label="Ваше Имя" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>

          <UFormGroup label="Ваш Телефон" name="telephone">
            <UInput v-model="state.telephone" type="telephone" />
          </UFormGroup>

          <UButton :loading="loading" type="submit">Заказать звонок</UButton>
        </UForm>
      </div>
    </UModal>
    <USlideover v-model="isSlideOverOpen">
      <div class="p-4 flex-1 flex flex-col items-center gap-4">
        <UButton
          color="gray"
          variant="ghost"
          size="xl"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isSlideOverOpen = false"
        />
        <ul class="flex flex-col gap-4 pt-6">
          <li v-for="item in navMenu" :key="item.name">
            <NuxtLink
              class="flex items-center gap-3 justify-center cursor-pointer transition-all hover:scale-105"
              :to="item.link"
              @click="isSlideOverOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <UButton
          class="block"
          label="CallBack"
          @click="
            () => {
              isOpen = true;
              isSlideOverOpen = false;
            }
          "
          >Заказать звонок</UButton
        >
      </div>
    </USlideover>
  </header>
</template>
