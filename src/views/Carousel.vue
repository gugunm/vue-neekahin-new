<template>
  <vueper-slides :dragging-distance="50">
    <vueper-slide
      v-for="i in 5"
      :key="i"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    />
  </vueper-slides>
  <vueper-slides :dragging-distance="50">
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
      :image="slide.image"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    />
  </vueper-slides>
</template>

<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },

  data() {
    return {
      slides: [
        {
          image: require('@/assets/img/cover.jpg'),
        },
        {
          image: require('@/assets/img/cover.jpg'),
        },
      ],
    };
  },
};
</script>