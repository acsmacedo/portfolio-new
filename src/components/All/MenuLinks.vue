<template>
  <ul class="menu__links">
    <img src="../../assets/icons/times-solid.svg" alt="fechar" v-on:click="closeMenu">
    <li v-on:click="closeMenu"><a href="#home">Home</a></li>
    <li v-on:click="closeMenu"><a href="#about">Sobre mim</a></li>
    <li v-on:click="closeMenu"><a href="#dna">Meu DNA</a></li>
    <li v-on:click="closeMenu"><a href="#projects">Projetos</a></li>
    <li v-on:click="closeMenu"><a href="#contact">Contato</a></li>
  </ul>
</template>

<script>
  export default {
    name: 'MenuLinks',
    methods: {
      closeMenu() {
        const links = document.querySelector('.menu__links');
        links.style.display = 'none';
      }
    }
  }
</script>
