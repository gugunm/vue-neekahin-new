<template>
  <nav-landing />
  <div
    class="bg-green-500"
    style="height:3000px"
  >
  </div>
  <footer-landing />
</template>

<script>
import NavLanding from './parts/NavLanding.vue';
import FooterLanding from './parts/FooterLanding.vue';
export default {
  components: { NavLanding, FooterLanding },
};
</script>