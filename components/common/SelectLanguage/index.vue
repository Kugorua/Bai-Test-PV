<template>
  <div class="language-selector">
    <button @click="toggleMenu" class="language-toggle">
      <img :src="currentFlag" :alt="currentLocale" class="flag-icon" />
      <img :src="iconArrowBlack" :alt="currentLocale" class="arrow-black" />
      <img :src="iconArrowWhite" :alt="currentLocale" class="arrow-white" />
    </button>
    <ul v-if="menuOpen" class="language-menu">
      <li
        v-for="locale in locales"
        :key="locale.code"
        @click="changeLanguage(locale.code)"
      >
        <img
          :src="iconChecked"
          class="checked-icon"
          :class="{ 'checked-hide': currentCodeLanguage !== locale.code }"
        />
        <img :src="getFlag(locale.code)" :alt="locale.code" class="flag-icon" />
        <p class="language-name">{{ t(locale.name) }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import EN from "~/assets/images/united-states.png";
import VN from "~/assets/images/vietnam.png";
import iconChecked from "~/assets/images/checked.png";
import iconArrowWhite from "~/assets/images/arrow-bold-white.png";
import iconArrowBlack from "~/assets/images/arrow-bold-black.png";

const { locales, locale, t } = useI18n();

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const changeLanguage = (langCode) => {
  locale.value = langCode;
  menuOpen.value = false;
};

const getFlag = (langCode) => {
  if (langCode === "en") return EN;
  if (langCode === "vi") return VN;
  return "";
};

const currentLocale = computed(() => locale.value);
const currentCodeLanguage = computed(
  () => locales.value.find((loc) => loc.code === locale.value)?.code
);
const currentFlag = computed(() => getFlag(locale.value));
</script>

<style lang="scss">
@use "./style" as *;
</style>
