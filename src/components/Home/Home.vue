<template>
  <div class="home">
    <HomeHeader />
    <HomeAbout />
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeAbout
    }
  }
</script>

<style lang="scss" scoped>

</style>>