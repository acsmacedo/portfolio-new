<template>
  <section class="home__projects" id="projects">
    <div class="home__projects__title">
      <h2><span>Projetos</span></h2>
      <p>Conheça alguns dos meus projetos pessoais, que demonstram as minhas habilidades e expressam um pouco da minha personalidade.</p>
    </div>

    <div class="home__projects__body">
      <div class="home__projects__large">
        <img src="../../assets/icons/clipboard-list-solid.svg">
        <h3>To do list</h3>
        <p>Aplicação que registra tarefas à fazer. Possui ferramentas de filtro e ordenação, salva as tarefas no navegador (Storage API) e possui botão para alternar paleta de cor (dark / light).</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-todolist.netlify.app/"
          code="https://github.com/acsmacedo/todolist-new/"
        />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/hamburger-solid.svg">
        <h3>Clone Food</h3>
        <p>Codificação de um modelo de site comercial com o tema "Restaurante". Site responsivo. Desenvolvido sem frameworks.</p>
        <span>HTML, CSS, Sass, Javascript.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-clone-food.netlify.app/"
          code="https://github.com/acsmacedo/website-clone-food/"
        />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/briefcase-solid.svg">
        <h3>Clone Corporate</h3>
        <p>Codificação de um modelo de site comercial com o tema "Negócios". Site responsivo. Desenvolvido sem frameworks.</p>
        <span>HTML, CSS, Sass, Javascript.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-clone-corporate.netlify.app/"
          code="https://github.com/acsmacedo/website-clone-corporate/"
        />
      </div>

      <div class="home__projects__large">
        <img src="../../assets/icons/clock-solid.svg">
        <h3>Toolbox</h3>
        <p>Aplicação com algumas ferramentas úteis (relógio, timer e cronômetro). Possui botão para alternar paleta de cor (dark / light).</p>
        <span>HTML, CSS, Sass, Javascript, Vue.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-toolbox.netlify.app/"
          code="https://github.com/acsmacedo/app-time/"
        />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/gamepad-solid.svg">
        <h3>Jogo da Memória</h3>
        <p>Jogo da memória com 3 níveis de dificuldade. Contabiliza o tempo e exibe um ranking com os melhores resultados.</p>
        <span>HTML, CSS, Sass, Javascript, Vue, Storage API.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-memory-game.netlify.app/"
          code="https://github.com/acsmacedo/memory-game/"
        />
      </div>

      <div class="home__projects__medium">
        <img src="../../assets/icons/newspaper-solid.svg">
        <h3>Clone Blog</h3>
        <p>Codificação de um modelo de site comercial para "Blog". Site responsivo. Desenvolvido com "Vue", criação de páginas dos posts com rotas dinâmicas.</p>
        <span>HTML, CSS, Sass, Javascript, Vue.</span>
        <HomeProjectsLinks 
          online="https://acsmacedo-clone-blog.netlify.app/"
          code="https://github.com/acsmacedo/website-clone-blog/"
        />
      </div>
    </div>
  </section>
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
