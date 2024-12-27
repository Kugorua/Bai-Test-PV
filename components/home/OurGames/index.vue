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
          v-for="(item, index) in imgCardGamesUrls"
          :key="index"
        >
          <img :src="item.img" :alt="'E-Space ' + (index + 1)" />
          <div class="games-description">
            <p class="game-title">{{ item.title }}</p>
            <p class="game-detail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
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
  {
    img: imgCardGames1,
    title: "E-Space",
  },
  {
    img: imgCardGames2,
    title: "Pirates",
  },
  {
    img: imgCardGames3,
    title: "Magic tree",
  },
  {
    img: imgCardGames4,
    title: "Kingland",
  },
  {
    img: imgCardGames5,
    title: "Witch Party",
  },
  {
    img: imgCardGames6,
    title: "Aborigines",
  },
  {
    img: imgCardGames7,
    title: "The Last Game",
  },
  {
    img: imgCardGames8,
    title: "Rocky",
  },
  {
    img: imgCardGames9,
    title: "Cinderella",
  },
  {
    img: imgCardGames10,
    title: "G-Dragon",
  },
  {
    img: imgCardGames11,
    title: "Blue Fire",
  },
  {
    img: imgCardGames12,
    title: "Egypt Game",
  },
];
</script>

<style lang="scss">
@use "./style" as *;
</style>
