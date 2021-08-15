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
          <!-- <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span> -->
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" stroke="red" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.8447 13.8447L45 0.999999L1 45L45 89L89 45L65.5941 21.5941" stroke="white" stroke-width="0.856313"/>
          <path d="M59.0991 27.1602L76.0826 44.1437L43.4301 76.7962M50.4233 18.4844L45 13.0611L13.9174 44.1437L25.1621 55.3884" stroke="white" stroke-width="0.856313"/>
          <path d="M37.0962 59.2545C38.1205 58.9487 40.4154 57.9075 41.4007 56.1887C42.386 54.4699 42.8379 53.4261 42.9407 53.1191M40.4777 57.3301C41.1943 57.4334 43.488 57.2973 44.4716 56.8072C45.4552 56.3171 46.1106 56.1951 46.3154 56.1954" stroke="white" stroke-width="0.856313"/>
          <path d="M52.7985 32.2451C48.8674 31.7483 44.6037 34.8961 42.9633 36.5321C45.7265 37.4573 51.9292 39.0016 54.6339 37.7766C57.3387 36.5516 59.0421 33.7894 59.5557 32.5614C58.9412 32.663 56.7295 32.7419 52.7985 32.2451Z" stroke="white" stroke-width="0.856313"/>
          <path d="M39.9058 26.0842C38.6711 30.5057 41.0192 35.5055 42.3477 37.4527C42.2175 37.2478 42.0359 36.4693 42.351 34.9954C42.7449 33.1529 44.8129 31.6199 45.7403 27.3208C46.4821 23.8815 43.8038 20.7652 42.3719 19.637C42.0643 19.9438 41.1404 21.6626 39.9058 26.0842Z" stroke="white" stroke-width="0.856313"/>
          <path d="M43.5235 76.4647C42.4253 74.6551 41.1591 72.2095 39.9983 69.395M49.7332 27.6335C49.1183 28.0422 46.1647 31.4989 39.2699 42.0561C36.9833 45.5572 36.2092 49.7428 36.3525 54.0317M49.7332 27.6335C53.1121 27.5357 58.5182 27.4611 59.2598 24.2675C60.0013 21.074 63.9789 17.5162 63.8773 16.9018M49.7332 27.6335C49.7343 26.8144 48.8142 23.5746 51.2786 20.5707C54.0475 17.1956 61.0111 16.3859 63.8773 16.9018M49.7332 27.6335C50.7591 26.099 53.4875 22.5396 56.1933 20.5774C58.899 18.6152 63.2627 17.1057 63.8773 16.9018M39.9983 69.395C41.5872 68.5781 43.8435 66.9429 45.0743 65.4087C46.7278 63.3477 46.5147 60.2912 46.3113 59.2671C42.9287 62.027 40.8675 61.2256 40.007 62.9445C39.1465 64.6635 39.8969 68.6106 39.9983 69.395ZM39.9983 69.395C39.7376 68.7631 40.2452 70.0611 39.9983 69.395ZM39.9983 69.395C39.8241 68.9251 38.8912 66.4988 38.7264 66.0145M38.7264 66.0145C38.6229 65.7072 36.7871 60.79 32.7956 59.5559C29.6024 58.5686 27.5157 54.634 27.5787 55.8628C27.6785 57.8083 29.6534 63.4872 32.4813 64.7773C35.858 66.3177 37.8728 66.0133 38.7264 66.0145ZM38.7264 66.0145C37.4487 62.2576 36.4883 58.0982 36.3525 54.0317M36.3525 54.0317C34.9653 53.5179 31.8385 51.9755 29.1241 48.8C27.284 46.6474 27.9046 42.0407 28.8298 39.2774C30.2627 39.6889 34.0469 42.7646 34.0412 46.9637C34.0354 51.264 36.0917 53.417 36.3525 54.0317Z" stroke="white" stroke-width="0.856313"/>
          <path d="M38.3466 43.2835C37.1897 42.0268 34.9971 39.2028 34.9587 37.4427M34.9836 31.6066C35.0845 32.733 35.2242 35.4158 34.9761 37.1356C34.9619 37.2337 34.9564 37.3363 34.9587 37.4427M34.9587 37.4427L31.9069 35.2884M37.4176 48.8113C39.6728 46.869 44.4903 42.9847 48.1768 42.6825C51.8586 42.3808 54.627 42.8961 54.934 42.9989C54.0099 44.943 52.6663 48.5523 49.0891 49.4415C47.86 49.747 44.7883 49.7428 41.7175 49.1243C40.7653 48.9325 37.8271 48.8118 37.4176 48.8113Z" stroke="white" stroke-width="0.856313"/>
          </svg>

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
