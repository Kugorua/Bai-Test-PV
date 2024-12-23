<template>
  <section class="our-partners">
    <div class="our-partners_container">
      <div class="our-partners_container_describe">
        <div class="title-section">{{ t("our_partners") }}</div>
      </div>
      <Carousel class="carousel-container" v-bind="config">
        <Slide v-for="(imgUrl, index) in imgPartnerUrls" :key="index">
          <div class="carousel-item">
            <img :src="imgUrl" :alt="'E-Space ' + (index + 1)" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { useI18n } from "vue-i18n";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import imgPartner1 from "~/assets/images/partner_1.png";
import imgPartner2 from "~/assets/images/partner_2.png";
import imgPartner3 from "~/assets/images/partner_3.png";
import imgPartner4 from "~/assets/images/partner_4.png";
import imgPartner5 from "~/assets/images/partner_5.png";
import imgPartner6 from "~/assets/images/partner_6.png";
import imgPartner7 from "~/assets/images/partner_7.png";

const { t } = useI18n();

const imgPartnerUrls = [
  imgPartner1,
  imgPartner2,
  imgPartner3,
  imgPartner4,
  imgPartner5,
  imgPartner6,
  imgPartner7,
];

const config = {
  itemsToShow: 5,
  gap: 40,
  wrapAround: true,
  slideSize: "260px",
  breakpoints: {
    0: {
      itemsToShow: 3,
    },
    768: {
      itemsToShow: 5,
    },
  },
};
</script>

<style lang="scss">
@use "./style" as *;
</style>
