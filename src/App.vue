<template>
  <nav-bar />
  <aside-menu :menu="menu" />
  <router-view />
  <footer-bar />
</template>

<script>
// @ is an alias to /src
import { useStore } from 'vuex';
import menu from '@/menu.js';
import NavBar from '@/components/NavBar';
import AsideMenu from '@/components/AsideMenu';
import FooterBar from '@/components/FooterBar';

export default {
  name: 'Home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
  },
  setup() {
    const store = useStore();

    store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg',
    });

    return {
      menu,
    };
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;600&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-vollkorn {
  font-family: 'Vollkorn', serif !important;
}
</style>
