<template>
  <div class="container mx-auto p-8 px-0 xl:px-10">
    <div class="flex flex-row flex-wrap">
      <div class="sm:w-1/3 md:w-full md:flex md:flex-row">
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="w-full h-20 md:h-52 md:w-1/3 mb-2 md:mb-4 px-2"
        >
          <div
            class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: 'url(' + HomeGaleri1 + ')' }"
          >
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-duration="1500"
          class="w-full h-20 md:h-52 md:w-1/3 mb-2 md:mb-4 px-2"
        >
          <div
            class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: 'url(' + HomeGaleri2 + ')' }"
          >
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="w-full h-20 md:h-52 md:w-1/3 md:mb-4 px-2"
        >
          <div
            class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
            :style="{ backgroundImage: 'url(' + HomeGaleri3 + ')' }"
          >
          </div>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        class="w-full md:w-1/2 h-64 md:h-64 px-2 sm:w-2/3"
      >
        <div
          class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + HomeGaleri4 + ')' }"
        >
        </div>
      </div>
      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        class="w-full md:w-1/2 h-32 md:h-64 px-2 sm:hidden md:block"
      >
        <div
          class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + HomeGaleri5 + ')' }"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeGaleri1 from '../../assets/img/home-galeri/home-galeri-1.png';
import HomeGaleri2 from '../../assets/img/home-galeri/home-galeri-2.jpg';
import HomeGaleri3 from '../../assets/img/home-galeri/home-galeri-3.jpg';
import HomeGaleri4 from '../../assets/img/home-galeri/home-galeri-4.jpg';
import HomeGaleri5 from '../../assets/img/home-galeri/home-galeri-5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  data() {
    return {
      HomeGaleri1,
      HomeGaleri2,
      HomeGaleri3,
      HomeGaleri4,
      HomeGaleri5,
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>