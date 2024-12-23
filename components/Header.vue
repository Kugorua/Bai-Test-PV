<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img :src="logoUrl" alt="Logo" />
      </div>
      <nav class="nav">
        <ul class="nav_list">
          <li>
            <a href="#">{{ t("about_us") }}</a>
          </li>
          <li>
            <a href="#">{{ t("games") }}</a>
          </li>
          <li>
            <a href="#">{{ t("partners") }}</a>
          </li>
          <li>
            <a href="#">{{ t("contact_us") }}</a>
          </li>
        </ul>
      </nav>
      <div class="language"><SelectLanguage /></div>
      <div class="menu-icon">
        <img @click="toggleMenu" class="open-menu" :src="iconMenu" alt="Logo" />
      </div>
      <div class="menu" v-if="menuOpen">
        <div class="menu-top">
          <SelectLanguage />
          <img
            :src="iconClose"
            class="close-menu"
            alt="Logo"
            @click="toggleMenu"
          />
        </div>
        <div class="menu-bottom">
          <ul class="nav_list">
            <li>
              <a href="#">{{ t("about_us") }}</a>
            </li>
            <li>
              <a href="#">{{ t("games") }}</a>
            </li>
            <li>
              <a href="#">{{ t("partners") }}</a>
            </li>
            <li>
              <a href="#">{{ t("contact_us") }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import iconClose from "~/assets/images/close-icon.png";
import iconMenu from "~/assets/images/menu.png";
import logoUrl from "~/assets/images/White_logo.png";
import SelectLanguage from "~/components/common/SelectLanguage/index.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
