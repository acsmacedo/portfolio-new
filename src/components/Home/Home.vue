<template>
  <div class="home">
    <HomeHeader />
  </div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
  }
</style>