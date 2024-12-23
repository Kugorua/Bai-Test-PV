<template>
  <Banner />
  <AboutUs />
  <OurGames />
  <OurPartners />
</template>
<script>
import Banner from "./Banner/index.vue";
import AboutUs from "./AboutUs/index.vue";
import OurGames from "./OurGames/index.vue";
import OurPartners from "./OurPartners/index.vue";
export default {
  components: {
    Banner,
    AboutUs,
    OurGames,
    OurPartners,
  },
};
</script>
