<template>
  <footer class="w-full bottom-0 bg-color-footer py-6 mt-5">
    <div class="mx-auto">
      <!-- <hr class="mb-6 border-b-1 border-gray-700" /> -->
      <div class="w-full px-4 flex flex-col items-center">
        <div class="">
          <img
            class="w-40 sm:w-48"
            :src="LogoFooter"
            alt=""
          >
        </div>
        <div class="my-5 sm:my-6 flex items-center justify-center">
          <img
            class="w-6 mx-3 sm:mx-4"
            :src="IconIg"
            alt=""
          >
          <img
            class="w-6 mx-3 sm:mx-4"
            :src="IconFb"
            alt=""
          >
          <img
            class="w-6 mx-3 sm:mx-4"
            :src="IconYt"
            alt=""
          >
        </div>
        <p class="text-xs sm:text-sm font-semibold py-1">
          Copyright © {{date}} Neekah.in. All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoFooter from '../../assets/img/logo-footer.svg';
import IconIg from '../../assets/img/icon-ig.svg';
import IconFb from '../../assets/img/icon-fb.svg';
import IconYt from '../../assets/img/icon-yt.svg';

export default {
  data() {
    return {
      LogoFooter,
      IconIg,
      IconFb,
      IconYt,
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.bg-color-footer {
  background-color: #f8f7f4;
}
</style>
