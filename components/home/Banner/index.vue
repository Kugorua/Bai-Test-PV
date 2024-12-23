<template>
  <section class="banner">
    <img class="banner_img-pc" :src="imgBannerPC" alt="logo" />
    <img class="banner_img-sp" :src="imgBannerSP" alt="logo" />
    <div class="banner_container">
      <h1>{{ t("countdown_title") }}</h1>
      <div class="countdown">
        <template v-for="(value, label) in countdown" :key="label">
          <div class="time-unit">
            <p>{{ value }}</p>
            <p>{{ t(label) }}</p>
          </div>
          <div class="separator" v-if="label != 'Seconds'">:</div>
        </template>
      </div>
      <div class="describe">
        {{ t("countdown_description") }}
      </div>
      <div class="new-letter">
        <input type="text" :placeholder="t('countdown_placeholder')" />
        <img :src="imgArrowRight" alt="arrow" />
      </div>
    </div>
    <div class="fairy-img"></div>
  </section>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import imgBannerPC from "~/assets/images/BG.png";
import imgBannerSP from "~/assets/images/BG_SP.png";
import imgArrowRight from "~/assets/images/arrow-right.png";
const { t } = useI18n();

const targetDate = new Date("2024-12-26").getTime();

const countdown = reactive({
  Day: 0,
  Hours: 0,
  Minutes: 0,
  Seconds: 0,
});

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    countdown.Day = "00";
    countdown.Hours = "00";
    countdown.Minutes = "00";
    countdown.Seconds = "00";
    return;
  }

  const formatNumber = (num) => num.toString().padStart(2, "0");

  countdown.Day = formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24)));
  countdown.Hours = formatNumber(
    Math.floor((difference / (1000 * 60 * 60)) % 24)
  );
  countdown.Minutes = formatNumber(Math.floor((difference / (1000 * 60)) % 60));
  countdown.Seconds = formatNumber(Math.floor((difference / 1000) % 60));
};

let intervalId;

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style lang="scss">
@use "./style" as *;
</style>
