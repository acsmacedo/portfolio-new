<template>
  <div class="home__projects">
    <div class="home__projects__title">
      <h2><span>Projetos</span></h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi quibusdam aperiam quam accusamus adipisci et itaque necessitatibus reiciendis, saepe asperiores tempora incidunt corrupti.</p>
    </div>

    <div class="home__projects__body">
      <div class="home__projects__large">
        <img src="../../assets/icons/clipboard-list-solid.svg" alt="">
        <h3>To do list</h3>
        <p>Aplicação que registra tarefas à fazer. Possui ferramentas de filtro e ordenação, salva as tarefas no navegador (Storage API) e possui modo de cor "noturno".</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/hamburger-solid.svg" alt="">
        <h3>Clone Food</h3>
        <p>Codificação de um modelo de site comercial com o tema "Restaurante". Site responsivo com menu colapse. Desenvolvido sem frameworks.</p>
        <span>HTML, CSS, Sass, Javascript.</span>
        <HomeProjectsLinks />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/briefcase-solid.svg" alt="">
        <h3>Clone Corporate</h3>
        <p>Codificação de um modelo de site comercial com o tema "Corporate". Site responsivo com menu colapse. Desenvolvido sem frameworks.</p>
        <span>HTML, CSS, Sass, Javascript.</span>
        <HomeProjectsLinks />
      </div>

      <div class="home__projects__large">
        <img src="../../assets/icons/clock-solid.svg" alt="">
        <h3>Toolbox</h3>
        <p>Aplicação com algumas ferramentas úteis (relógio, timer e cronômetro). Possui modo de cor "noturno".</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/gamepad-solid.svg" alt="">
        <h3>Jogo da Memória</h3>
        <p>Jogo da memória com 3 níveis de dificuldade. Contabiliza o tempo e exibe um ranking com os melhores resultados.</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/newspaper-solid.svg" alt="">
        <h3>Clone Blog</h3>
        <p>Codificação de um modelo de site comercial. Site responsivo com menu colapse. Desenvolvido com "Vue", simulando páginas dos posts com rotas dinâmicas (Vue Router).</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks />
      </div>
    </div>
  </div>
</template>

<script>
  import HomeProjectsLinks from './HomeProjectsLinks'
  export default {
    name: 'HomeProjects',
    components: {
      HomeProjectsLinks
    }
  }
</script>

<style lang="scss" scoped>

</style>>