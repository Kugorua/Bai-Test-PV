<template>
  <NuxtLayout name="home">
    <div id="about-section"><Home /></div>

    <button
      @click="scrollToSection('about-section')"
      class="scroll-arrow"
      :class="{ 'arrow-up': isScrolled }"
    >
      <img :src="iconArrowDown" alt="" />
    </button>
  </NuxtLayout>
</template>

<script setup>
import Home from "~/components/home";
import iconArrowDown from "~/assets/images/arrow-down.png";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
</style>
