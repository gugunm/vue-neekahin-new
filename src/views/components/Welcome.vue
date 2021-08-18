<template>
  <div
    class="relative bg-cover bg-center h-screen flex items-center justify-center bg-position-mobile sm:bg-position-desktop"
    :style="{ backgroundImage: 'url(' + CoverImg + ')' }"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      :data-aos-once="true"
      class="text-center sm:text-center flex flex-col items-center justify-center text-white"
    >
      <img
        class="mb-3 sm:mb-8 h-16 sm:h-20"
        :src="HomeIcon"
        alt=""
      >
      <h1
        data-aos="zoom-in"
        data-aos-duration="1500"
        :data-aos-once="true"
        class="px-10 text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4"
      >Undangan Untuk Momen Terbaik Anda</h1>
      <h4
        data-aos="fade-right"
        data-aos-duration="1500"
        :data-aos-once="true"
        class="px-10 max-w-3xl text-sm sm:text-xl sm:max-w-2xl italic mb-3"
      >Membantu anda membagikan momen terbaik anda kepada orang-orang terkasih</h4>
      <button
        v-scroll-to="{ element: '#price', duration: 1500, offset: -100 }"
        data-aos="flip-right "
        data-aos-duration="1500"
        :data-aos-once="true"
        class="bg-transparent border text-sm hover:bg-dark-gold text-white hover:border-dark-gold py-2 sm:py-3 px-10 mt-14"
      >
        Pesan Undangan
      </button>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import CoverImg from '../../assets/img/cover.jpg';
import HomeIcon from '../../assets/img/home-icon.png';

export default {
  data() {
    return {
      HomeIcon,
      CoverImg,
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>