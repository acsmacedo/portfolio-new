<template>
  <section class="home__about" id="about">
    <div class=home__about__container>
      <div>
        <h2>
          <span>Sobre</span>
          <span>mim</span>
        </h2>
        <p>Olá, me chamo Anderson Macedo e sou desenvolvedor Full Stack. Para conhecer mais sobre mim, acesse meu currículo.</p>
        <p>O que eu posso adiantar? Sou organizado, flexível e detalhista. Atualmente estudo Ciências da Computação, porém, já sou formado em Design e isso reflete-se bastante em meus projetos.</p>
        <router-link to="/curriculo">currículo</router-link>
      </div>
      <img src="../../assets/illustrations/home-about.svg" alt="Homem sentando digitando no notebook">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout'
  }
</script>
