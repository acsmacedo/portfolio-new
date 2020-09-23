<template>
  <div id="app">
    <Menu />
    <MenuLinks />
    <router-view/>
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
