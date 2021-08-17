<template>
  <div
    data-aos="fade-down"
    data-aos-duration="1500"
    class="flex flex-col items-center px-5"
  >
    <h4 class="text-center mt-12 text-sm text-grey sm:text-base">Harga</h4>
    <h2 class="text-center text-4xl text-gold font-dancing sm:text-6xl sm:mt-5">Pricing</h2>
  </div>
  <div class="">
    <card-carousel />
  </div>
</template>

<script>
import CardCarousel from './CardCarousel.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    CardCarousel,
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
/* .carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
} */

/* Galeri Carousel */
.carousel__item {
  min-height: auto;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>