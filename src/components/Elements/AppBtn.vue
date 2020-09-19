<template>
  <a :href="link">{{ text }}</a>
</template>

<script>
  export default {
    name: 'AppBtn',
    props: {
      text: String,
      link: String
    }
  }
</script>

<style lang="scss" scoped>
  a {
    --text: var(--azul);
    --shadow: var(--azul-claro);
    --background: var(--branco-claro);
    font-family: 'Courier Prime', monospace;
    font-size: 0.8em;
    font-weight: 700;
    text-decoration: none;
    text-transform: lowercase;
    color: var(--text);
    background-color: var(--background);
    border: 0.125rem solid var(--text);
    border-radius: 0.3rem;
    box-shadow: var(--shadow) 0 -0.25rem 0px 0px inset;
    padding: 0.5rem 1.25rem;
    outline: none;
  }
</style>
