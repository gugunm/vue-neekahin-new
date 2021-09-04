<template>
  <div
    v-if="show"
    class="relative content"
  >
    <div class="bg-red-400 py-16">
      <h1 class="text-center text-white">PERNIKAHAN WAHYU & ANGGI</h1>
    </div>
    <div class="py-14">
      <Counter
        :tahun="2021"
        :bulan="9"
        :hari="20"
        :jam="9"
        :menit="0"
      />
    </div>
    <button
      class="btn-play fixed right-0 top-1/2 mr-9"
      @click="togglePlay"
    >
      <img
        v-if="isPlay"
        class="icon-pause"
        :src="IPause"
      >
      <img
        v-else
        class="icon-play"
        :src="IPlay"
      >
    </button>
  </div>
  <transition name="slide-fade">
    <div
      v-if="!show"
      class="absolute top-0 left-0 flex flex-col bg-cover bg-center w-full h-screen"
      :style="{ backgroundImage: 'url(' + CoverTemplate1 + ')' }"
    >
      <div class="flex justify-center pt-28">
        <span class="color-title-cover-1 flex items-start text-2xl md:text-3xl">Jerome</span><span class="font-parisienne color-title-cover-2 px-1 text-7xl md:text-8xl">&</span><span class="color-title-cover-1 flex items-end text-2xl md:text-3xl">Jasmine</span>
      </div>
      <div class="flex items-center justify-center py-4 ">
        <span class="inline-block bg-color-cover-2 rounded-full h-1 w-1"></span>
        <p class="inline-block color-title-cover-2 text-sm tracking-widest px-2">WEDDING INVITATION</p>
        <span class="inline-block bg-color-cover-2 rounded-full h-1 w-1"></span>
      </div>
      <div class="text-center pt-8">
        <span></span>
        <p class="inline-block color-title-cover-2 tracking-widest text-xl md:text-2xl">28 . 08 . 2021</p>
        <span></span>
      </div>
      <div class="absolute z-10 w-full bottom-0 text-center py-10 md:py-16">
        <button
          class="btn-buka-undangan mx-auto flex items-center justify-items-center text-center h-auto w-auto px-4 py-2 md:px-10 md:py-3 bg-white rounded-xl text-xs"
          @click="openInvitation"
        >
          <img
            class="img-amplop"
            :src="Amplop"
            alt=""
          >
          <p>
            Open Invitation
          </p>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import CoverTemplate1 from '../assets/img/template/bg-template-1.jpg';
import Amplop from '../assets/img/template/envelope.svg';
import IPlay from '../assets/img/template/icon-play.svg';
import IPause from '../assets/img/template/icon-pause.svg';

import Counter from '@/views/components/Counter.vue';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      show: false,
      CoverTemplate1,
      Amplop,
      IPlay,
      IPause,
      music: new Audio('https://bit.ly/nk-beautiful-in-white'),
      isPlay: false,
    };
  },
  watch: {
    isPlay(newValue, oldValue) {
      if (newValue) {
        this.music.play();
      } else {
        this.music.pause();
      }
    },
  },
  mounted() {
    this.music.loop = true;
  },
  methods: {
    togglePlay() {
      this.isPlay = !this.isPlay;
    },
    openInvitation() {
      this.show = true;
      this.isPlay = true;
    },
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

.img-amplop {
  width: 20px;
  margin-right: 14px;
}

.color-title-cover-1 {
  color: #4d4d4d;
}

.color-title-cover-2 {
  color: rgba(77, 77, 77, 0.4);
}

.bg-color-cover-2 {
  background: rgba(77, 77, 77, 0.4);
}
/* 
.btn-play {
  height: 40px;
  width: 40px;
  border-radius: 50%;
} */
.btn-play {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 4s linear infinite;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>