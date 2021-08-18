<template>
  <div class="flex flex-col items-center px-5 sm:px-20 xl:max-w-screen-xl mx-auto">
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        :data-aos-once="true"
      >
        <h4 class="text-center mt-12 text-sm sm:text-base text-grey">Cara Pemesanan</h4>
        <h2 class="text-center mt-2 text-4xl text-gold font-dancing sm:text-6xl sm:mt-5">How to Order</h2>
      </div>
      <div class="bg-neekah-2 w-full p-8 mt-10 sm:py-14 lg:mt-20 lg:mb-8">
        <div class="flex flex-col sm:flex-row items-center sm:items-start">
          <div
            data-aos="flip-left"
            data-aos-duration="1500"
            :data-aos-once="true"
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
            :data-aos-once="true"
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
            :data-aos-once="true"
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
            :data-aos-once="true"
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
              :data-aos-once="true"
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
          :data-aos-once="true"
          class="hto-bottom text-xs sm:text-sm mt-10 text-justify sm:px-10 sm:mt-14"
        >*Jika masih kebingungan dengan proses ini bisa hubungi tim Neekah.in melalui <a
            class="admin-contact"
            target="_blank"
            href="https://wa.link/s2bt2q"
          >Admin Support kami.</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomeHto1 from '../../assets/img/home-hto-1.png';
import HomeHto2 from '../../assets/img/home-hto-2.png';
import HomeHto3 from '../../assets/img/home-hto-3.png';
import HomeHto4 from '../../assets/img/home-hto-4.png';

export default {
  data() {
    return {
      HomeHto1,
      HomeHto2,
      HomeHto3,
      HomeHto4,
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

/* CIRCLE */
.circle-number {
  height: 30px;
  width: 55px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>