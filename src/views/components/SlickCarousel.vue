<template>
  <vueper-slides
    :dragging-distance="50"
    fixed-height="208px"
    :bullets="false"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
    />
  </vueper-slides>
</template>

<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

import HomeGaleri1 from '../../assets/img/home-galeri/home-galeri-1.png';
import HomeGaleri2 from '../../assets/img/home-galeri/home-galeri-2.jpg';
import HomeGaleri3 from '../../assets/img/home-galeri/home-galeri-3.jpg';
import HomeGaleri4 from '../../assets/img/home-galeri/home-galeri-4.jpg';
import HomeGaleri5 from '../../assets/img/home-galeri/home-galeri-5.jpg';

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: HomeGaleri1,
        },
        {
          image: HomeGaleri2,
        },
        {
          image: HomeGaleri3,
        },
        {
          image: HomeGaleri4,
        },
        {
          image: HomeGaleri5,
        },
      ],
    };
  },
};
</script>

<style>
/* .vueperslides__parallax-wrapper {
  height: 1000px;
} */
.vueperslides__arrow {
  font-size: 7px;
  padding: 0px 10px;
}

.vueperslides__arrow svg path {
  stroke-width: 2;
}
</style>