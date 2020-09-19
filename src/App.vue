<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Work+Sans:wght@300;600&display=swap');

  * {
    box-sizing: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;

  }

  html {
    --azul: rgb(60, 80, 255);
    --azul-claro: rgba(196, 202, 255);
    --rosa: rgb(255, 185, 200);
    --branco: rgb(250, 250, 250);
    --branco-claro: rgb(255, 255, 255);
  }

  body {
    margin: 0;
    padding: 0;
  }



  h1 {
    --text: var(--azul);
    --shadow: var(--rosa);
    font-size: 2em;
    line-height: 0.85em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    span {
      font-family: 'Courier Prime', monospace;
      font-size: 1em;
      line-height: 0.45em;
      font-weight: 700;
      color: var(--text);
      box-shadow: var(--shadow) 0 -0.2em 0 0 inset;
      padding: 0 0.25em;
      margin: 0.5em 0.2em 0 0.2em;
    }
    @media (min-width: 600px) {
      font-size: 2.5em;
    }
  }

  p {
    color: var(--azul);
    margin: 0;
  }

  .home__container {
    max-width: 550px;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
