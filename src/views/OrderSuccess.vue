<template>
  <nav-landing />
  <div class="bg-white pt-24 md:pt-32">
    <div class="py-4 px-0 xl:px-28 lg:px-24 md:px-24 sm:px-32">
      <div class="grid grid-cols-12 color-text">
        <div class="col-span-12 xl:col-span-5 lg:col-span-5">
          <img class="mx-auto w-1/2 xl:w-8/12 lg:w-3/4 lg:m-auto" :src="successRing" alt="success-ring"
          >
        </div>
        <div class="px-8 col-span-12 xl:col-span-7 lg:col-span-7">
          <div class="text-2xl xl:text-4xl font-bold capitalize">
            <p class="">pesanan sukses</p>
          </div>
          <div class="text-xs xl:text-base lg:text-base md:text-base">
            <div class="pt-6">
              <p class="text-justify ">Pesanan anda sukses, cek email anda dan tunggu beberapa saat tim kami akan menghubungi anda terkait detail pesanan anda</p>
            </div>
            <div class="pt-4 grid grid-cols-12">
              <img class="col-span-1 w-9/12 xs:w-full xl:w-7/12 lg:w-10/12 md:7/12" :src="phoneCall" alt="">
              <p class="col-span-11 pl-4 my-auto xl:pl-0 lg:pl-4 md:pl-4 ">Tim Neekah.in akan menghubungi anda</p>
            </div>
            <div class="pt-4 grid grid-cols-12 ">
              <img class="col-span-1 w-9/12 xs:w-full xl:w-7/12 lg:w-10/12 md:7/12" :src="envelope" alt="">
              <p class="col-span-11 pl-4 my-auto xl:pl-0 lg:pl-4 md:pl-4">Desain di proses dengan waktu +- 7 Hari</p>
            </div>
            <div class="pt-10 ">
              <p class="">*Jika masih menemui kesulitan hubungi tim <a :href="'https://api.whatsapp.com/send?l=en&phone=+628&text=Terimakasih telah menggunakan Layanan kami Neekah.in, apakah ada yang bisa kami bantu?'"><span class="font-bold">support kami</span></a></p>
            </div>
          </div>

        </div>

        <div class="col-span-12 pt-12 pb-12 mx-auto">
          <a :href="'/'"><button type="submit" class="btn font-medium button-color px-20 py-3" >kembali ke beranda</button></a>
        </div>
      </div>
    </div>
  </div>
  <footer-landing />
</template>

<script>
import FooterLanding from './parts/FooterLanding.vue';
import NavLanding from './parts/NavLanding.vue';
import successRing from '@/assets/img/succes-ring.png';
import phoneCall from '@/assets/img/phone-call.png';
import envelope from '@/assets/img/envelope.png';
export default {
  components: { NavLanding, FooterLanding },
  data() {
    return {
      successRing,
      phoneCall,
      envelope,
    };
  },
};
</script>
<style scoped>
  /* .f-32{
    font-size: 32px;
  }
  .f-24{
    font-size: 24px;
  } */
  .color-text{
    color: #8A5D1A;
  }
  .button-color{
    background-color: #B58200;
    color:#ffffff;
    font-size: 14px;
    border-radius: 5px;
    border:solid 1px #B58200;
  }
  .button-color:hover{
    background:transparent;
    border:solid 1px #B58200;
    color:#B58200;
  }
</style>
