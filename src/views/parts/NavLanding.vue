<template>
  <div
    class="z-10 fixed font-sans antialiased"
    id="app"
  >
    <nav
      class="flex items-center justify-between flex-wrap bg-transparent transition duration-500 ease-in-out w-screen py-4 sm:py-5 px-6 md:px-20"
      :class="{ 
        'onScroll': !view.topOfPage, 
        'onMenuOpen' : open, 
        'bg-white' : $route.name !== 'landing'
      }"
    >
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <img
          class="h-11 sm:h-14"
          :src="view.topOfPage && open === false && $route.name === 'landing' ? LogoNav : LogoNavGold"
          alt=""
        >
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center py-2 rounded text-white hover:text-black hover:border-white"
        >
          <svg
            class="fill-current"
            :class="view.topOfPage && open === false && $route.name === 'landing' ? 'text-white' : 'text-gold'"
            viewBox="0 0 100 80"
            width="40"
            height="20"
          >
            <rect
              width="100"
              height="12"
              rx="6"
            ></rect>
            <rect
              y="30"
              width="100"
              height="12"
              rx="6"
            ></rect>
            <rect
              y="60"
              width="100"
              height="12"
              rx="6"
            ></rect>
          </svg>
          <!-- <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 10 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg> -->
        </button>
      </div>
      <div
        :class="open ? 'block': 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto md:text-center sm:text-left"
      >
        <div
          :class="view.topOfPage && open === false && $route.name === 'landing'? 'text-white' : 'text-black text-center'"
          class="text-sm sm:flex-grow"
        >
          <a
            href="#responsive-header"
            class="btn-nav no-underline block mt-4 sm:inline-block sm:mt-0 md:mx-8"
          >
            BERANDA
          </a>
          <a
            href="#responsive-header"
            class="btn-nav no-underline block mt-4 sm:inline-block sm:mt-0 md:mx-8"
          >
            GALLERY
          </a>
          <a
            href="#responsive-header"
            class="btn-nav no-underline block mt-4 sm:inline-block sm:mt-0 md:mx-8"
          >
            CARA PESAN
          </a>
          <a
            href="#responsive-header"
            class="btn-nav no-underline block mt-4 sm:inline-block sm:mt-0 md:mx-8"
          >
            HARGA
          </a>
        </div>
        <div :class="{
          'text-center' : open
          }">
          <a
            href="#"
            class="no-underline inline-block text-sm px-8 py-2 sm:py-3 leading-none border hover:border-transparent hover:bg-white mt-4 sm:mt-0"
            :class="view.topOfPage && open === false && $route.name === 'landing'? 'text-white border-white hover:text-gold' : 'text-gold border-gold hover:bg-gold hover:text-white'"
          >Pesan Sekarang</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LogoNav from '../../assets/img/logo-nav.svg';
import LogoNavGold from '../../assets/img/logo-nav-gold.svg';

export default {
  data() {
    return {
      LogoNav,
      LogoNavGold,
      open: false,
      view: {
        topOfPage: true,
        colorSvg: '',
      },
    };
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.colorSvg = '#000000';
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
        this.colorSvg = '#ffffff';
      }
    },
  },
};
</script>

<style scoped>
/* nav {
  padding: 0 2rem;
  position: fixed;
  width: 100%;
  height: 70px;
  transition: all 0.2s ease-in-out;
} */

nav.onScroll {
  box-shadow: 0 0 10px #aaa;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: rgba(255, 255, 255, 1);
}
nav.onMenuOpen {
  background-color: #ffffff;
}
/* nav.onScroll ul li {
  color: #10b761;
}

nav ul {
  margin-left: 3em;
  width: 25%;
  display: flex;
  justify-content: space-between;
}
nav ul li {
  cursor: pointer;
  font-weight: 600;
  list-style-type: none;
  color: white;
} */
</style>

