<template>
  <section class="home__about" id="about">
    <div class=home__about__container>
      <div>
        <h2>
          <span>Sobre</span>
          <span>mim</span>
        </h2>
        <p>Olá, me chamo Anderson Macedo e sou desenvolvedor Front-end. Para conhecer mais sobre mim, acesse meu <router-link to="/curriculo">currículo</router-link>.</p>
        <p>O que eu posso adiantar? Sou detalhista, organizado e prático. Atualmente estudo Ciências da Computação, porém, já sou formado em Design e isso reflete-se bastante em meus projetos.</p>
        <div>
          <a href=""><img src="../../assets/icons/github.svg" alt=""></a>
          <a href=""><img src="../../assets/icons/linkedin-in.svg" alt=""></a>
        </div>
      </div>
      <img src="../../assets/illustrations/home-about.svg" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout'
  }
</script>
