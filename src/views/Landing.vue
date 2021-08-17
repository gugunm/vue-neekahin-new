<template>
  <nav-landing />
  <div>
    <welcome />
    <about />
    <gallery />
    <how-to-order />
    <pricing />
  </div>
  <footer-landing />
</template>

<script>
import NavLanding from './parts/NavLanding.vue';
import FooterLanding from './parts/FooterLanding.vue';
import About from './components/About.vue';
import HowToOrder from './components/HowToOrder.vue';
import Pricing from './components/Pricing.vue';
import Welcome from './components/Welcome.vue';
import Gallery from './components/Gallery.vue';

export default {
  components: {
    NavLanding,
    FooterLanding,
    About,
    HowToOrder,
    Pricing,
    Welcome,
    Gallery,
  },
};
</script>