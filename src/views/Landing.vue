<template>
  <nav-landing />
  <div
    class="relative bg-cover bg-center h-screen flex items-center justify-center"
    :style="cssProps"
  >
    <div class="text-center sm:text-center flex flex-col items-center justify-center ">
      <img
        class="mb-3 h-16 sm:h-24"
        :src="HomeIcon"
        alt=""
      >
      <h1 class="px-10 text-2xl font-bold mb-3">Undangan Untuk Momen Terbaik Anda</h1>
      <h4 class="px-10 max-w-3xl text-xl mb-3">Membantu anda membagikan momen terbaik anda kepada orang-orang terkasih</h4>
      <button class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-10 border border-white0 hover:border-transparent absolute inset-x-0 bottom-0 left-auto right-auto mb-16">
        Pesan Undangan
      </button>
    </div>
  </div>
  <!-- DESKRIPSI SINGKAT -->
  <div class="px-5">
    <h4 class="text-center mt-6">Siapa Neekah.in</h4>
    <h2 class="text-center mt-2">Who We Are?</h2>
    <p class="text-sm leading-6 text-justify mt-6">Kami membantu anda dalam membagikan momen terbaik untuk anda dan orang orang terdekat anda. Neekah.in bertekad untuk selalu memberikan pelayanan terbaik dalam pembuatan undangan digital berbasis web.</p>
    <p class="text-sm leading-6 text-justify mt-2">Beberapa keuntungan yang anda dapatkan :</p>
    <ul class="text-sm leading-6 list-disc text-justify pl-6 pr-2 mt-2">
      <li>Desain custom yang sesuai dengan karakter anda</li>
      <li>Terhindar dari kontak langsung paparan COVID-19</li>
      <li>Tidak merusak lingkungan karena bersifat digital</li>
      <li>Jasa dan pelayanan cepat dan murah</li>
    </ul>
    <img
      class="mt-6"
      :src="HomeAbout"
      alt=""
    >
    <div class="flex items-center justify-around text-center mt-5 mb-7">
      <div class="flex flex-col items-center mx-2">
        <img
          class=""
          :src="HomeAboutMask"
          alt=""
        >
        <span class="text-xs mt-2">Avoid Contact</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class=""
          :src="HomeAboutEnv"
          alt=""
        >
        <span class="text-xs mt-2">Enviromental Friendly</span>
      </div>
      <div class="flex flex-col items-center mx-2">
        <img
          class=""
          :src="HomeAboutEasy"
          alt=""
        >
        <span class="text-xs mt-2">Easy & efficient</span>
      </div>
    </div>
  </div>
  <!-- GALERI KAMI -->
  <div class="bg-neekah-1 flex flex-col items-center">
    <h4 class="text-center mt-6">Galeri Kami</h4>
    <h2 class="text-center mt-2">Featured Story</h2>
    <img
      class="my-5 px-5"
      :src="HomeGaleri1"
      alt=""
    >
  </div>
  <!-- HOW TO ORDER -->
  <div class="flex flex-col items-center px-5">
    <h4 class="text-center mt-6">Cara Pemesanan</h4>
    <h2 class="text-center mt-2">How to Order</h2>
    <div class="bg-neekah-2 w-full flex flex-col items-center p-8 mt-6">
      <div class="flex items-center justify-betwee10">
        <img
          class="w-8"
          :src="HomeHto1"
          alt=""
        >
        <p class="mx-5">1</p>
        <p class="hto text-xs">Klik Order dan pilih jenis undangan dibawah</p>
      </div>
      <div class="flex items-center justify-between mt-10">
        <img
          class="w-8"
          :src="HomeHto2"
          alt=""
        >
        <p class="mx-5">2</p>
        <p class="hto text-xs">Isi Formulir dan deskripsi secara lengkap</p>
      </div>
      <div class="flex items-center justify-between mt-10">
        <img
          class="w-8"
          :src="HomeHto3"
          alt=""
        >
        <p class="mx-5">3</p>
        <p class="hto text-xs">Tim Neekah.in akan menghubungi anda</p>
      </div>
      <div class="flex items-center justify-between mt-10">
        <img
          class="w-8"
          :src="HomeHto4"
          alt=""
        >
        <p class="mx-5">4</p>
        <p class="hto text-xs">Desain di proses dengan waktu +- 7 Hari</p>
      </div>
      <p class="hto-bottom text-xs mt-10 text-justify">*Jika masih kebingungan dengan proses ini bisa hubungi tim Neekah.in melalui <a
          class="admin-contact"
          href=""
        >Admin Support kami.</a></p>
    </div>
  </div>
  <!-- PRICING -->
  <div class="flex flex-col items-center px-5">
    <h4 class="text-center mt-6">Harga</h4>
    <h2 class="text-center mt-2">Pricing</h2>

    <carousel :itemsToShow="3.95" :wrapAround="true" :navigationEnabled="true">
      <slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>


    <!-- <carousel
      :itemsToShow="3.95"
      :wrapAround="true"
    >
      <slide v-for="slide in 10":key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </slide>
    </carousel> -->
  </div>
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
import CoverImg from '../assets/img/cover.jpeg';
import HomeIcon from '../assets/img/home-icon.png';
import HomeAbout from '../assets/img/home-about.png';
import HomeAboutMask from '../assets/img/home-about-mask.png';
import HomeAboutEnv from '../assets/img/home-about-env.png';
import HomeAboutEasy from '../assets/img/home-about-easy.png';
import HomeGaleri1 from '../assets/img/home-galeri-1.png';
import HomeHto1 from '../assets/img/home-hto-1.png';
import HomeHto2 from '../assets/img/home-hto-2.png';
import HomeHto3 from '../assets/img/home-hto-3.png';
import HomeHto4 from '../assets/img/home-hto-4.png';

import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import AOS from 'aos';

import 'aos/dist/aos.css';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: { NavLanding, FooterLanding, Carousel, Slide, Navigation },
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
      Carousel,
      Slide,
      Pagination,
      Navigation,
      cssProps: {
        backgroundImage: 'url(' + CoverImg + ')',
      },
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.bg-neekah-1 {
  background-color: #f8f7f4;
}
.bg-neekah-2 {
  background-color: #f8f7f4;
}
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

.carousel__item {
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

/* git pull */
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}

</style>
