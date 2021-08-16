<template>
  <nav-landing />
  <div
    class="relative bg-cover bg-center h-screen flex items-center justify-center bg-position-mobile sm:bg-position-desktop"
    :style="cssProps"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="text-center sm:text-center flex flex-col items-center justify-center text-white"
    >
      <img
        class="mb-3 sm:mb-8 h-16 sm:h-20"
        :src="HomeIcon"
        alt=""
      >
      <h1
        data-aos="fade-left"
        data-aos-duration="1500"
        class="px-10 text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4"
      >Undangan Untuk Momen Terbaik Anda</h1>
      <h4
        data-aos="fade-right"
        data-aos-duration="1500"
        class="px-10 max-w-3xl text-sm sm:text-xl sm:max-w-2xl italic mb-3"
      >Membantu anda membagikan momen terbaik anda kepada orang-orang terkasih</h4>
      <button
        data-aos="flip-right "
        data-aos-duration="1500"
        class="bg-transparent text-sm hover:bg-white text-white hover:text-gold hover:border-none py-2 sm:py-3 px-10 border border-white mt-14"
      >
        Pesan Undangan
      </button>
    </div>
  </div>
  <!-- DESKRIPSI SINGKAT -->
  <div class="px-5">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h4 class="text-center mt-12 text-sm sm:text-base text-grey">Siapa Neekah.in</h4>
      <h2 class="font-dancing text-center text-4xl sm:text-6xl text-gold mt-3 sm:mt-5">Who We Are?</h2>
    </div>
    <!-- <div class="block sm:hidden"> -->
    <div class="sm:flex sm:flex-wrap sm:px-24 sm:mt-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        class="sm:flex-1"
      >
        <p class="text-sm sm:text-base sm:leading-8 leading-6 text-justify sm:text-left mt-10">Kami membantu anda dalam membagikan momen terbaik untuk anda dan orang orang terdekat anda. Neekah.in bertekad untuk selalu memberikan pelayanan terbaik dalam pembuatan undangan digital berbasis web.</p>
        <p class="text-sm sm:text-base sm:leading-8 leading-6 text-justify mt-2 sm:mt-4">Beberapa keuntungan yang anda dapatkan :</p>
        <ul class="text-sm sm:text-base sm:leading-8 leading-6 list-disc text-justify pl-6 pr-2 mt-2 sm:mt-4 text-dark-gold">
          <li>Desain custom yang sesuai dengan karakter anda</li>
          <li>Terhindar dari kontak langsung paparan COVID-19</li>
          <li>Tidak merusak lingkungan karena bersifat digital</li>
          <li>Jasa dan pelayanan cepat dan murah</li>
        </ul>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="1500"
        class="mt-6 sm:flex-1"
        :src="HomeAbout"
        alt=""
      >
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      class="text-dark-gold italic flex items-center justify-evenly text-center mt-5 mb-7 sm:mt-14 sm:my-20 sm:px-36"
    >
      <div class="flex flex-col items-center mx-2">
        <img
          class="sm:w-32"
          :src="HomeAboutMask"
          alt=""
        >
        <span class="text-xs sm:text-base mt-2 sm:mt-6">Avoid Contact</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class="sm:w-32"
          :src="HomeAboutEnv"
          alt=""
        >
        <span class="text-xs sm:text-base mt-2 sm:mt-6">Enviromental Friendly</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class="sm:w-32"
          :src="HomeAboutEasy"
          alt=""
        >
        <span class="text-xs sm:text-base mt-2 sm:mt-6">Easy & efficient</span>
      </div>
    </div>
  </div>
  <!-- GALERI KAMI -->
  <div class="bg-neekah-1 flex flex-col items-center">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h4 class="text-center mt-12 text-sm sm:text-base text-grey">Galeri Kami</h4>
      <h2 class="text-center mt-2 text-4xl text-gold sm:text-6xl sm:mt-5 font-dancing">Featured Story</h2>
    </div>
    <!-- <img
      class="mt-10 mb-8 px-5"
      :src="HomeGaleri1"
      alt=""
    > -->
  </div>
  <Carousel>
    <Slide
      v-for="slide in 10"
      :key="slide"
    >
      <div class="carousel__item h-40 mx-20">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation class="mx-14" />
      <Pagination />
    </template>
  </Carousel>
  <!-- HOW TO ORDER -->
  <div class="flex flex-col items-center px-5 sm:px-20">
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h4 class="text-center mt-12 text-sm sm:text-base text-grey">Cara Pemesanan</h4>
      <h2 class="text-center mt-2 text-4xl text-gold font-dancing sm:text-6xl sm:mt-5">How to Order</h2>
    </div>
    <div class="bg-neekah-2 w-full p-8 mt-10 sm:py-14">
      <div class="flex flex-col sm:flex-row items-center sm:items-start">
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="flex sm:flex-1 items-center justify-between mt-10 sm:flex-col sm:text-center sm:mt-0"
        >
          <img
            class="w-10"
            :src="HomeHto1"
            alt=""
          >
          <div class="w-auto px-5 sm:pt-6 sm:pb-3">
            <div class="rounded-full h-6 w-6 flex items-center justify-center bg-dark-gold text-white text-xs">1</div>
          </div>
          <p class="hto text-xs sm:text-sm sm:w-4/5">Klik Order dan pilih jenis undangan dibawah</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="flex sm:flex-1 items-center justify-between mt-10 sm:flex-col sm:text-center sm:mt-0"
        >
          <img
            class="w-10"
            :src="HomeHto2"
            alt=""
          >
          <div class="w-auto px-5 sm:pt-6 sm:pb-3">
            <div class="rounded-full h-6 w-6 flex items-center justify-center bg-dark-gold text-white text-xs">2</div>
          </div>
          <p class="hto text-xs sm:text-sm sm:w-4/5">Isi Formulir dan deskripsi secara lengkap</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="flex sm:flex-1 items-center justify-between mt-10 sm:flex-col sm:text-center sm:mt-0"
        >
          <img
            class="w-10"
            :src="HomeHto3"
            alt=""
          >
          <div class="w-auto px-5 sm:pt-6 sm:pb-3">
            <div class="rounded-full h-6 w-6 flex items-center justify-center bg-dark-gold text-white text-xs">3</div>
          </div>
          <p class="hto text-xs sm:text-sm sm:w-4/5">Tim Neekah.in akan menghubungi anda</p>
        </div>
        <div
          data-aos="flip-left"
          data-aos-duration="1500"
          class="flex sm:flex-1 items-center justify-between mt-10 sm:flex-col sm:text-center sm:mt-0"
        >
          <img
            class="w-10"
            :src="HomeHto4"
            alt=""
          >
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            class="w-auto px-5 sm:pt-6 sm:pb-3"
          >
            <div class="rounded-full h-6 w-6 flex items-center justify-center bg-dark-gold text-white text-xs">4</div>
          </div>
          <p class="hto text-xs sm:text-sm sm:w-4/5">Desain di proses dengan waktu +- 7 Hari</p>
        </div>
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        class="hto-bottom text-xs sm:text-sm mt-10 text-justify sm:px-10 sm:mt-14"
      >*Jika masih kebingungan dengan proses ini bisa hubungi tim Neekah.in melalui <a
          class="admin-contact"
          href=""
        >Admin Support kami.</a></p>
    </div>
  </div>
  <!-- PRICING -->
  <div
    data-aos="fade-down"
    data-aos-duration="1500"
    class="flex flex-col items-center px-5"
  >
    <h4 class="text-center mt-12 text-sm text-grey sm:text-base">Harga</h4>
    <h2 class="text-center text-4xl text-gold font-dancing sm:text-6xl sm:mt-5">Pricing</h2>
  </div>
  <!-- <carousel
    class="my-10"
    :itemsToShow="3.95"
    :wrapAround="true"
    :navigationEnabled="true"
  >
    <slide
      v-for="slide in 3"
      :key="slide"
    >
      <div class="carousel__item">
        <div class="w-full h-96">
          {{ slide }}
        </div>
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel> -->
  <!-- <div class="bg-green-500">
    <div
      class="displayBox"
      data-aos="zoom-in"
      data-aos-duration="1500"
    >
      <p>Animated element using zoom-in.</p>
    </div>
  </div> -->
  <footer-landing class="mt-5" />
</template>

<script>
import NavLanding from './parts/NavLanding.vue';
import FooterLanding from './parts/FooterLanding.vue';
import CoverImg from '../assets/img/cover.jpg';
import HomeIcon from '../assets/img/home-icon.png';
import HomeAbout from '../assets/img/home-about.png';
import HomeAboutMask from '../assets/img/home-about-mask.svg';
import HomeAboutEnv from '../assets/img/home-about-env.svg';
import HomeAboutEasy from '../assets/img/home-about-easy.svg';
import HomeGaleri1 from '../assets/img/home-galeri-1.png';
import HomeHto1 from '../assets/img/home-hto-1.png';
import HomeHto2 from '../assets/img/home-hto-2.png';
import HomeHto3 from '../assets/img/home-hto-3.png';
import HomeHto4 from '../assets/img/home-hto-4.png';

import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    NavLanding,
    FooterLanding,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      HomeIcon,
      HomeAbout,
      HomeAboutMask,
      HomeAboutEnv,
      HomeAboutEasy,
      HomeGaleri1,
      HomeHto1,
      HomeHto2,
      HomeHto3,
      HomeHto4,
      // Carousel,
      // Slide,
      // Pagination,
      // Navigation,
      cssProps: {
        backgroundImage: 'url(' + CoverImg + ')',
      },
      galeryMobileImg: {
        image1: {
          backgroundImage: 'url(' + HomeGaleri1 + ')',
        },
      },
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
/* BG COVER */
.hto {
  line-height: 17px;
  letter-spacing: 0.02em;
}
.hto-bottom {
  line-height: 24px;
  letter-spacing: 0.02em;
}
p .admin-contact {
  font-weight: bold;
  text-decoration: underline;
  color: #b58200;
}

/* CIRCLE */
.circle-number {
  height: 30px;
  width: 55px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

/* CAROUSEL */
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
}
</style>

