<template>
  <div>
    
    <HomeHeader />
    <HomeAbout />
    <HomeTopic />
    <HomeProjects />
    <HomeContact />
    
  </div>
</template>

<script>
  
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeTopic from './HomeTopic.vue'
  import HomeProjects from './HomeProjects.vue'
  import HomeContact from './HomeContact.vue'

  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeAbout,
      HomeTopic,
      HomeProjects,
      HomeContact
    }
  }
</script>
