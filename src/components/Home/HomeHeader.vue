<template>
  <header class="home__header" id="home">
    <div class=home__header__container>
      <div>
        <h1>
          <span>Boas-vindas!</span>
        </h1>
        <p>Este é meu portfólio. Aqui você vai encontrar um pouco sobre mim, meu trabalho e projetos!</p>
        <a href="#about">Vamos lá!</a>
      </div>
      <img v-if="showImage" src="../../assets/illustrations/home-header.svg" alt="">
      <img v-else src="../../assets/illustrations/home-header-large.svg" alt="">
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HomeHeader',
    data: function() {
      return {
        showImage: true
      }
    },
    methods: {
      showImageChange() {
        const width = window.innerWidth;
        width < 768 ? this.showImage = true : this.showImage = false; 
      }
    },
    mounted() {
      this.showImageChange();
      
      window.addEventListener('resize', () => {
        this.showImageChange();
      })
    }
  }
</script>
