<template>
  <header class="home__header">
    <div class=home__container>
      <h1>
        <span>Desenvolvedor</span>
        <span>Front-end</span>
      </h1>
      <p>Minimalista, funcional e esteticamente agradável. O que mais um site ou aplicação web precisa ser?</p>
      <img src="../../assets/illustrations/home-header.svg" alt="">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="scss">
  .home__header {
    width: 100%;
    height: 100vh;
    background-color: var(--branco);
    p {
      margin: 1rem 0 2rem 0;
      @media (min-width: 600px) {
        font-size: 1.2em;
        margin: 1.5rem 0 2rem 0;
      }
    }
    img {
      max-width: 250px;
      margin-bottom: 2rem;
      @media (min-width: 600px) {
        max-width: 300px;
      }
    }
  }
</style>
