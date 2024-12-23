<template>
  <section class="our-game">
    <div class="our-game_container">
      <div class="our-game_container_describe">
        <div class="title-section">{{ t("games_title") }}</div>
        <div class="text-describe text">
          {{ t("games_description") }}
        </div>
      </div>
      <div class="games-container">
        <div
          class="game-card"
          v-for="(imgUrl, index) in imgCardGamesUrls"
          :key="index"
        >
          <img :src="imgUrl" :alt="'E-Space ' + (index + 1)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import imgCardGames1 from "~/assets/images/Card-games_1.png";
import imgCardGames2 from "~/assets/images/Card-games_2.png";
import imgCardGames3 from "~/assets/images/Card-games_3.png";
import imgCardGames4 from "~/assets/images/Card-games_4.png";
import imgCardGames5 from "~/assets/images/Card-games_5.png";
import imgCardGames6 from "~/assets/images/Card-games_6.png";
import imgCardGames7 from "~/assets/images/Card-games_7.png";
import imgCardGames8 from "~/assets/images/Card-games_8.png";
import imgCardGames9 from "~/assets/images/Card-games_9.png";
import imgCardGames10 from "~/assets/images/Card-games_10.png";
import imgCardGames11 from "~/assets/images/Card-games_11.png";
import imgCardGames12 from "~/assets/images/Card-games_12.png";

const { t } = useI18n();

const imgCardGamesUrls = [
  imgCardGames1,
  imgCardGames2,
  imgCardGames3,
  imgCardGames4,
  imgCardGames5,
  imgCardGames6,
  imgCardGames7,
  imgCardGames8,
  imgCardGames9,
  imgCardGames10,
  imgCardGames11,
  imgCardGames12,
];
</script>

<style lang="scss">
@use "./style" as *;
</style>
