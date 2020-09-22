<template>
  <div class="home">
    <HomeHeader />
    <HomeAbout />
    <HomeProjects />
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeProjects from './HomeProjects.vue'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeAbout,
      HomeProjects
    }
  }
</script>

<style lang="scss" scoped>

</style>>