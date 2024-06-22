<script lang="ts" setup>
// @ts-ignore
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
const phoneRegExp = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;

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
  <footer class="mt-5">
    <div
      class="h-full p-7 max-w-screen-xl mx-auto grid grid-cols-2 justify-between border shadow-xl rounded-t-xl bg-white"
    >
      <div class="flex flex-col gap-2">
        <p>
          Биологически активная добавка к пище Ферментативный гидролизат
          трепанга.
        </p>

        <p>ИП Вороной С.В. Все права защищены.</p>
        <p>Номер СГР KZ.16.01.98.003.R.000098.03.23 от 14 марта 2023 года</p>
        <NuxtLink class="underline" to="/policy"
          >Политика обработки персональных данных</NuxtLink
        >
      </div>
      <div class="flex flex-col justify-around items-end"></div>
      <!-- <ul class="footer__social">
        <li class="footer__social-item">
          <NuxtLink to="/">
            <Icon name="simple-icons:whatsapp" color="black" class="text-xl" />
          </NuxtLink>
        </li>
        <li class="footer__social-item">
          <NuxtLink to="/">
            <Icon name="simple-icons:telegram" color="black" class="text-xl" />
          </NuxtLink>
        </li>
        <li class="footer__social-item">
          <NuxtLink to="/">
            <Icon name="simple-icons:instagram" color="black" class="text-xl" />
          </NuxtLink>
        </li>
      </ul> -->
    </div>

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
  </footer>
</template>

<style scoped></style>
