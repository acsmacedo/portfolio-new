<template>
  <div class="home">
    <HomeHeader />
    <HomeAbout />
    <HomeProjects />
    <HomeContact />
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeProjects from './HomeProjects.vue'
  import HomeContact from './HomeContact.vue'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeAbout,
      HomeProjects,
      HomeContact
    }
  }
</script>
