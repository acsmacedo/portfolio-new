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
    },
    mounted() {
      const menu = document.querySelector('.menu');
      const footer = document.querySelector('.footer');

      menu.style.opacity = 1;
      footer.style.opacity = 1;
      
      window.scrollTo(0, 0);
    },
    beforeDestroy() {
      const menu = document.querySelector('.menu');
      const footer = document.querySelector('.footer');

      menu.style.opacity = 0;
      footer.style.opacity = 0;
    }
  }
</script>
