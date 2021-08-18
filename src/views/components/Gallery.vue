<template>
  <div class="bg-neekah-1 flex flex-col items-center">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      :data-aos-once="true"
    >
      <h4 class="text-center mt-12 text-sm sm:text-base text-grey">Galeri Kami</h4>
      <h2 class="text-center mt-2 text-4xl text-gold sm:text-6xl sm:mt-5 font-dancing">Featured Story</h2>
    </div>
  </div>
  <div class="bg-neekah-1 py-10 px-6 ">
    <div class="hidden sm:block">
      <grid-gallery />
    </div>
    <div
      class="sm:hidden"
      data-aos="zoom-in"
      data-aos-duration="1500"
      :data-aos-once="true"
    >
      <slick-carousel />
    </div>
  </div>
</template>

<script>
import SlickCarousel from './SlickCarousel.vue';
import GridGallery from './GridGallery.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    SlickCarousel,
    GridGallery,
  },
  mounted() {
    AOS.init();
  },
};
</script>