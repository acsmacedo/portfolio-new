<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Footer from './components/All/Footer.vue'

  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>
