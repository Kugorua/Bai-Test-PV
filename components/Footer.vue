<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img class="img-logo" :src="logoUrl" alt="Tech Logo" />
          <div class="social-icons">
            <a href="#" aria-label="Twitter">
              <img :src="iconTwitter" alt="Tech Logo" />
            </a>
            <a href="#" aria-label="Facebook"
              ><img :src="iconFb" alt="Tech Logo"
            /></a>
            <a href="#" aria-label="LinkedIn"
              ><img :src="iconLn" alt="Tech Logo"
            /></a>
          </div>
        </div>

        <div class="footer-address">
          <h3>{{ t("footer_address") }}</h3>
          <div class="address-item">
            <img :src="iconLocation" alt="" />
            <div class="address-item_content">
              <p>
                {{ t("footer_address_malta") }}
              </p>
              <p>
                {{ t("footer_address_danang") }}
              </p>
            </div>
          </div>
          <div class="address-item">
            <img :src="iconVector" alt="" />
            <div class="address-item_content">
              <p>
                <strong>(+1) 555-0106-000</strong> or
                <strong>(+236) 555-0008</strong>
              </p>
            </div>
          </div>
        </div>

        <div class="footer-subscribe">
          <h3>{{ t("footer_subscribe") }}</h3>

          <div class="subscribe-form">
            <p>
              {{ t("footer_subscribe_text") }}
            </p>
            <div class="new-letter">
              <input type="text" placeholder="Email" />
              <img :src="imgArrowRight" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-bottom">
    <p>2017 Copyright. Policy.</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import logoUrl from "~/assets/images/White_logo.png";
import iconFb from "~/assets/images/icon-fb.png";
import iconTwitter from "~/assets/images/icon-twitter.png";
import iconLn from "~/assets/images/icon-ln.png";
import iconLocation from "~/assets/images/location.png";
import iconVector from "~/assets/images/mobile.png";
import imgArrowRight from "~/assets/images/white-arrow-right.png";
const { t } = useI18n();
</script>
