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
  // Do something with event.data
  console.log(event.data);
}

const isOpen = ref(false);
</script>

<template>
  <header class="flex items-center justify-center">
    <div
      class="flex max-w-screen-xl w-full h-28 items-center justify-between shadow-xl rounded-b-xl bg-white px-5"
    >
      <AppLogo />
      <AppNav />
      <div class="flex items-center gap-4">
        <div
          class="flex items-center gap-3 justify-center cursor-pointer transition-all hover:scale-105"
        >
          <Icon name="material-symbols:call" color="black" class="text-xl" />
          <span @click="isOpen = true" class="text-xl font-bold"
            >+7 902 055 55 52</span
          >
        </div>

        <UButton label="CallBack" @click="isOpen = true"
          >Заказать звонок</UButton
        >

        <UModal v-model="isOpen">
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

              <UButton type="submit">Заказать звонок</UButton>
            </UForm>
          </div>
        </UModal>
      </div>
    </div>
  </header>
</template>
