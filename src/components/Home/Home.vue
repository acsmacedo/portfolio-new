<template>
  <div class="home">
    <HomeHeader />
    <HomeAbout />
    <HomeDna />
    <HomeProjects />
    <HomeContact />
  </div>
</template>

<script>
  
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeDna from './HomeDna.vue'
  import HomeProjects from './HomeProjects.vue'
  import HomeContact from './HomeContact.vue'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeAbout,
      HomeDna,
      HomeProjects,
      HomeContact
    }
  }
</script>
