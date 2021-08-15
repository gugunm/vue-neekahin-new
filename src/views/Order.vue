<template>
  <nav-landing />
  <div class="h-96 bg-green-500">
  </div>
  <footer-landing />
</template>

<script>
import FooterLanding from './parts/FooterLanding.vue';
import NavLanding from './parts/NavLanding.vue';
export default {
  components: { NavLanding, FooterLanding },
};
</script>
