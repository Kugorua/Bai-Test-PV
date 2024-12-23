<template>
  <section class="about-us">
    <div class="about-us_container">
      <div class="left-content">
        <div class="left-content_describe">
          <div class="title-section">{{ t("about_us_title") }}</div>
          <div class="text-describe">
            {{ t("about_us_description") }}
          </div>
        </div>
        <div class="left-content_statistical">
          <div class="item">
            <p>600<mark>M</mark>+</p>
            <span>{{ t("about_us_users_label") }}</span>
          </div>
          <div class="item">
            <p>135+</p>
            <span>{{ t("about_us_games_label") }}</span>
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="right-content_wrap">
          <div class="info-item">
            <img class="icon" :src="iconCalenderUrl" alt="" />
            <div class="info-item_describe">
              <p>{{ t("access_24_7") }}</p>
              <p>
                {{ t("access_24_7_description") }}
              </p>
            </div>
          </div>
          <div class="info-item">
            <img class="icon" :src="iconPenUrl" alt="" />
            <div class="info-item_describe">
              <p>{{ t("design") }}</p>
              <p>
                {{ t("design_description") }}
              </p>
            </div>
          </div>
          <div class="info-item">
            <img class="icon" :src="iconTeamUrl" alt="" />
            <div class="info-item_describe">
              <p>{{ t("team") }}</p>
              <p>
                {{ t("team_description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <img class="illustrator" :src="imgIllustratorUrl" alt="" />
    </div>
  </section>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import iconCalenderUrl from "~/assets/images/calender.png";
import iconPenUrl from "~/assets/images/pen.png";
import iconTeamUrl from "~/assets/images/team.png";
import imgIllustratorUrl from "~/assets/images/Illustrator.png";
const { t } = useI18n();
</script>
<style lang="scss">
@use "./style" as *;
</style>
