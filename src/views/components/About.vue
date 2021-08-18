<template>
  <div class="px-5 xl:max-w-screen-xl mx-auto">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      :data-aos-once="true"
    >
      <h4 class="text-center mt-12 text-sm md:text-base text-grey">Siapa Neekah.in</h4>
      <h2 class="font-dancing text-center text-4xl md:text-6xl text-gold mt-3 md:mt-5">Who We Are?</h2>
    </div>
    <!-- <div class="block md:hidden"> -->
    <div class="md:flex md:flex-wrap md:px-24 md:mt-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="md:flex-1"
        :data-aos-once="true"
      >
        <p class="text-sm md:text-base md:leading-8 leading-6 text-justify md:text-left mt-10">Kami membantu anda dalam membagikan momen terbaik untuk anda dan orang orang terdekat anda. Neekah.in bertekad untuk selalu memberikan pelayanan terbaik dalam pembuatan undangan digital berbasis web.</p>
        <p class="text-sm md:text-base md:leading-8 leading-6 text-justify mt-2 md:mt-4">Beberapa keuntungan yang anda dapatkan :</p>
        <ul class="text-sm md:text-base md:leading-8 leading-6 list-disc text-justify pl-6 pr-2 mt-2 md:mt-4 text-dark-gold">
          <li>Desain custom yang sesuai dengan karakter anda</li>
          <li>Terhindar dari kontak langsung paparan COVID-19</li>
          <li>Tidak merusak lingkungan karena bersifat digital</li>
          <li>Jasa dan pelayanan cepat dan murah</li>
        </ul>
      </div>
      <img
        data-aos="zoom-in"
        data-aos-duration="1500"
        :data-aos-once="true"
        class="mt-6 md:flex-1"
        :src="HomeAbout"
        alt=""
      >
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      :data-aos-once="true"
      class="text-dark-gold italic flex items-center justify-evenly text-center mt-5 mb-7 md:mt-14 md:my-20 md:px-36"
    >
      <div class="flex flex-col items-center mx-2">
        <img
          class="md:w-24"
          :src="HomeAboutMask"
          alt=""
        >
        <span class="text-xs md:text-base mt-2 md:mt-6">Avoid Contact</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class="md:w-24"
          :src="HomeAboutEnv"
          alt=""
        >
        <span class="text-xs md:text-base mt-2 md:mt-6">Enviromental Friendly</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class="md:w-24"
          :src="HomeAboutEasy"
          alt=""
        >
        <span class="text-xs md:text-base mt-2 md:mt-6">Easy & efficient</span>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeAbout from '../../assets/img/home-about.png';
import HomeAboutMask from '../../assets/img/home-about-mask.svg';
import HomeAboutEnv from '../../assets/img/home-about-env.svg';
import HomeAboutEasy from '../../assets/img/home-about-easy.svg';

export default {
  data() {
    return {
      HomeAbout,
      HomeAboutMask,
      HomeAboutEnv,
      HomeAboutEasy,
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>