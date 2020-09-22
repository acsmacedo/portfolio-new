<template>
  <div id="app">
    <router-view/>
    <Contact />
    <Footer />
  </div>
</template>

<script>
  import Contact from './components/All/Contact.vue'
  import Footer from './components/All/Footer.vue'

  export default {
    name: 'App',
    components: {
      Contact,
      Footer
    }
  }
</script>
