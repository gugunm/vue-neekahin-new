<template>
  <div class="block lg:block mb-24 mt-4">
    <!-- Box -->
    <div class="md:flex md:justify-center md:space-x-8 lg:space-x-12 md:px-14 xl:max-w-screen-xl mx-auto">
      <!-- box-1 -->
      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        class="mt-16 py-8 px-8 lg:px-0 w-72 lg:w-1/3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
      >
        <div class="w-sm">
          <img
            class="w-20 mx-auto"
            :src="IconSilver"
            alt=""
          />
          <div class="mt-4 text-center lg:px-10">
            <h1 class="text-2xl text-black-1 font-semibold mb-2">Silver</h1>
            <h2 class="text-2xl text-brown font-vollkorn mb-2">IDR 250.000</h2>
            <div class="h-8"></div>
            <div class="price my-6 border-dashed py-4 lg:py-6">
              <ul class="text-grey text-xs md:text-base leading-8  lg:leading-10 list-disc uppercase font-light">
                <li>Simple Design</li>
                <li>Max 5 foto/galeri</li>
                <li>maps</li>
                <li>countdown</li>
                <li>Music</li>
                <li>Link / URL Domain</li>
              </ul>
            </div>
            <button class="btn-price text-xs lg:text-sm w-full mt-2 mb-4 py-3 lg:py-3 px-8 rounded bg-transparent text-gold tracking-widest hover:bg-dark-gold hover:text-white transition duration-200">Pesan Sekarang</button>
          </div>
        </div>
      </div>

      <!-- box-2 -->
      <div
        data-aos="flip-right"
        data-aos-duration="1500"
        class="mt-16 py-8 px-8 lg:px-0 bg-whit w-72 lg:w-1/3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
      >
        <div class="w-sm">
          <img
            class="w-20 mx-auto"
            :src="IconGold"
            alt=""
          />
          <div class="mt-4 text-center lg:px-10">
            <h1 class="text-2xl text-black-1 font-semibold mb-2">Gold</h1>
            <h2 class="text-2xl text-brown font-vollkorn line-through mb-2">IDR 350.000</h2>
            <h2 class="text-2xl text-gold font-vollkorn">300.000</h2>
            <div class="price my-6 border-dashed py-4 lg:py-6">
              <ul class="text-grey text-xs md:text-base leading-8  lg:leading-10 list-disc uppercase font-light">
                <li>Silver features included</li>
                <li>Elegance Design</li>
                <li>Max 8 foto/galeri</li>
                <li>countdown</li>
                <li>Video</li>
                <li>UCapan dari tamu</li>
              </ul>
            </div>
            <button class="w-full text-xs lg:text-sm mt-2 mb-4 py-3 lg:py-3 px-8 rounded bg-transparent bg-gold text-white tracking-widest hover:bg-dark-gold transition duration-200">Pesan Sekarang</button>
          </div>
        </div>
      </div>

      <!-- box-3 -->
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        class="mt-16 py-8 px-8 lg:px-0 bg-whit w-72 lg:w-1/3 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0"
      >
        <div class="w-sm">
          <img
            class="w-20 mx-auto"
            :src="IconPlatinum"
            alt=""
          />
          <div class="mt-4 text-center lg:px-10">
            <h1 class="text-2xl text-black-1 font-semibold mb-2">Platinum</h1>
            <h2 class="text-2xl text-brown font-vollkorn line-through mb-2">IDR 500.000</h2>
            <h2 class="text-2xl text-gold font-vollkorn">450.000</h2>
            <div class="price my-6 border-dashed py-4 lg:py-6">
              <ul class="text-grey text-xs md:text-base leading-8  lg:leading-10 list-disc uppercase font-light">
                <li>Gold Features Included</li>
                <li>Premium Design</li>
                <li>Max 12 foto/galeri</li>
                <li>Wedding gift</li>
                <li>Revisi minor & major</li>
                <li>2 lokasi acara</li>
              </ul>
            </div>
            <button class="w-full text-xs lg:text-sm mt-2 mb-4 py-3 lg:py-3 px-8 rounded bg-transparent bg-gold text-white tracking-widest hover:bg-dark-gold transition duration-200">Pesan Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <vueper-slides
    class="card-carousel my-10 no-shadow"
    :visible-slides="1"
    :slide-ratio="1 / 4"
    :gap="2"
    :dragging-distance="200"
    :bullets="false"
    :arrows="false"
  >
    <vueper-slide
      v-for="(slide, i) in slides"
      :key="i"
    >
      <div class="bg-green-500 h-40 w-40">
      </div>
    </vueper-slide>
  </vueper-slides> -->
</template>

<script>
import IconSilver from '../../assets/img/price-silver.svg';
import IconGold from '../../assets/img/price-gold.svg';
import IconPlatinum from '../../assets/img/price-platinum.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {},
  data() {
    return {
      IconSilver,
      IconGold,
      IconPlatinum,
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scooped>
.price {
  border-radius: 25px;
  border: 2px dashed #b58200;
  stroke-dashoffset: 1000;
}
.btn-price {
  border: 1px solid #b58200;
}
ul {
  text-align: center;
  list-style-position: inside;
}

.max-w-card {
  max-width: 100px;
}
</style>