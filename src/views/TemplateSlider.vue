<template>
  <div
    v-if="show"
    class="relative content"
  >
    <div class="bg-red-400 py-16">
      <h1 class="text-center text-white">PERNIKAHAN WAHYU & ANGGI</h1>
    </div>
  </div>
  <transition name="slide-fade">
    <div
      v-if="!show"
      class="absolute top-0 left-0 flex flex-col bg-cover bg-center w-full h-screen justify-end"
      :style="{ backgroundImage: 'url(' + CoverTemplate1 + ')' }"
    >
      <div class="flex items-center justify-center mb-16">
        <button
          class="btn-buka-undangan"
          @click="show = true"
        >
          <p>Open Invitation</p>
        </button>
      </div>
    </div>
    <!-- <div
      v-if="!show"
      class="absolute top-0 left-0 flex flex-col bg-green-300 w-full h-screen justify-end"
    >
      <div class="flex items-center justify-center mb-16">
        <button
          class="btn-buka-undangan"
          @click="show = true"
        >
          <p>Open Invitation</p>
        </button>
      </div>
    </div> -->
  </transition>
</template>

<script>
import CoverTemplate1 from '../assets/img/template/bg-template-1.jpg';

export default {
  data() {
    return {
      show: false,
      CoverTemplate1,
    };
  },
};
</script>


<style scoped>
.content {
  height: 5000px;
}
.slide-fade-leave-active {
  overflow-y: hidden;
  max-height: 100vh;
  transition-property: all;
  transition-duration: 3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  max-height: 0;
}

.btn-buka-undangan {
  width: 281px;
  height: 48px;
  left: 493px;
  top: 640px;
  background: #ffffff;
  border-radius: 12px;
}

.btn-buka-undangan p {
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.04em;
}
</style>