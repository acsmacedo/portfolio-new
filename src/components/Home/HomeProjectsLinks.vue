<template>
  <div class="home__projects__links">
    <a :href="online">
      <img src="../../assets/icons/eye-solid.svg">
      <span>ver online</span>
    </a>
    <a :href="code">
      <img src="../../assets/icons/code-solid.svg">
      <span>ver código</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'HomeProjectsLinks',
    props: {
      online: String,
      code: String
    }
  }
</script>
