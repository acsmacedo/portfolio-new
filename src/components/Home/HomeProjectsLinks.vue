<template>
  <div class="home__projects__links">
    <a :href="online">
      <img src="../../assets/icons/eye-solid.svg">
      <span>preview</span>
    </a>
    <a :href="code">
      <img src="../../assets/icons/code-solid.svg">
      <span>código</span>
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
