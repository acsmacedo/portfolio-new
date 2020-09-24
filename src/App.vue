<template>
  <div id="app">
    <Menu />
    <MenuLinks />
    <transition name="transition" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
  import Menu from './components/All/Menu.vue'
  import MenuLinks from './components/All/MenuLinks.vue'
  import Footer from './components/All/Footer.vue'

  export default {
    name: 'App',
    components: {
      Menu,
      MenuLinks,
      Footer
    }
  }
</script>

<style lang="scss">
  .transition-enter, .transition-leave-to {
   opacity: 0;
  }
  
  .transition-enter-active { 
    transition: opacity 1s linear;
  }

  .transition-leave-active { 
    transition: opacity 0.5s ease-in;
  }  
</style>
