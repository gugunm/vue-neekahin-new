<template>
  <div
    class="z-10 fixed font-sans antialiased"
    id="app"
  >
    <nav
      class="flex items-center justify-between flex-wrap bg-transparent transition duration-500 ease-in-out w-screen py-4 sm:py-5 px-6 md:px-20"
      :class="{ 'onScroll': !view.topOfPage}"
    >
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center py-2 rounded text-teal-lighter border-teal-light hover:text-black hover:border-white"
        >
          <svg
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
        <div class="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white md:mx-8"
          >
            Beranda
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white md:mx-8"
          >
            Gallery
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white md:mx-8"
          >
            Cara Pesan
          </a>
          <a
            href="#responsive-header"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white md:mx-8"
          >
            Harga
          </a>
        </div>
        <div>
          <a
            href="#"
            class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0"
          >Pesan Sekarang</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      view: {
        topOfPage: true,
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
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
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
  background-color: #fff;
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