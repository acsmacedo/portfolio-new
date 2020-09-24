<template>
  <div>
    <Menu />
    <MenuLinks />
    <HomeHeader />
    <HomeAbout />
    <HomeTopic />
    <HomeProjects />
    <HomeContact />
    <Footer />
  </div>
</template>

<script>
  import Menu from '../All/Menu.vue'
  import MenuLinks from '../All/MenuLinks.vue'
  import Footer from '../All/Footer.vue'
  import HomeHeader from './HomeHeader.vue'
  import HomeAbout from './HomeAbout.vue'
  import HomeTopic from './HomeTopic.vue'
  import HomeProjects from './HomeProjects.vue'
  import HomeContact from './HomeContact.vue'

  export default {
    name: 'Home',
    components: {
      Menu,
      MenuLinks,
      Footer,
      HomeHeader,
      HomeAbout,
      HomeTopic,
      HomeProjects,
      HomeContact
    }
  }
</script>
