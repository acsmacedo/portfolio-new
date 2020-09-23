<template>
  <nav class="menu">
    <div class="menu__container">
      <a href="">Anderson Macedo</a>
      <img src="../../assets/icons/bars-solid.svg" alt="" v-on:click="openMenu">
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
      },
      hideMenu() {
        const menu = document.querySelector('.menu');
        let prevScrollpos = window.pageYOffset;

        window.addEventListener('scroll', () => {
          let currentScrollPos = window.pageYOffset;
          prevScrollpos > currentScrollPos ?  menu.style.top = "0" : menu.style.top = "-50px";
          prevScrollpos = currentScrollPos;
        })
      }
    },
    mounted() {
      //this.hideMenu();
    }
  }
</script>
