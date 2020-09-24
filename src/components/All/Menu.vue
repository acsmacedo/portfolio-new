<template>
  <nav class="menu">
    <div class="menu__container">
      <a href="#home" v-if="route">Anderson Macedo</a>
      <router-link to="/" v-else>Anderson Macedo</router-link>
      <img src="../../assets/icons/bars-solid.svg" alt="" v-on:click="openMenu">
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    computed: {
      route() {
        return this.$route.path === '/' ? true : false;
      }
    },
    methods: {
      openMenu() {
        const links = document.querySelector('.menu__links');
        links.style.display = 'flex';
      }
    }
  }
</script>
