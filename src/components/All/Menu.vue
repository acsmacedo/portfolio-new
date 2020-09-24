<template>
  <nav class="menu">
    <div class="menu__container">
      <a href="#home">Anderson Macedo</a>
      <img src="../../assets/icons/bars-solid.svg" alt="menu" v-on:click="openMenu">
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Menu',
    methods: {
      openMenu() {
        const links = document.querySelector('.menu__links');
        links.style.display = 'flex';
      }
    }
  }
</script>
