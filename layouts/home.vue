<template>
  <div class="root">
    <Header />
    <main><slot /></main>
    <Footer />
  </div>
</template>
<script>
export default {
  name: "HomeLayout",
};
</script>
<style></style>
