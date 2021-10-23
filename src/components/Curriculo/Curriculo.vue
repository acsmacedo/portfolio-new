<template>
  <section class="curriculo">
    <div class="curriculo__container">
      <div class="curriculo__info">
        <div class="curriculo__header">
          <img src="../../assets/img/anderson-macedo.jpg" alt="Anderson Macedo" v-if="showImage">
          <h3>Anderson Macedo</h3>
          <span>Desenvolvedor Full Stack</span>
          <p>Sou formado em design e atuei na área durante alguns anos da minha carreira, porém, desde o final de 2019 resolvi migrar para a área de desenvolvimento de software. Ingressei no curso de Ciência da Computação e atualmente trabalho como Desenvolvedor Full Stack.</p>
          <p>Considero-me um profissional organizado, flexível e detalhista. Além disso, foco bastante no prazo e qualidade dos meus serviços, visando sempre a facilidade de manutenção e escalabilidade do projeto.</p>
          <p>Além de buscar aperfeiçoar constantemente os conhecimentos adquiridos recentemente, tenho bastante interesse e facilidade em aprender novas ferramentas, tendo atuado em projetos com metodologias ágeis e tecnologias como .Net e React.</p>
        </div>

        <div class="curriculo__academic">
          <h4>Acadêmico</h4>
          <div class="curriculo__item">
            <div>
              <span>Curso:</span>
              <span>Ciências da Computação</span>
            </div>
            <div>
              <span>Instituição:</span>
              <span>Universidade Cruzeiro do Sul</span>
            </div>
            <div>
              <span>Conclusão:</span>
              <span>1º sem/2023 (previsão)</span>
            </div>
          </div>

          <div class="curriculo__item">
            <div>
              <span>Curso:</span>
              <span>Desenho Industrial (Design)</span>
            </div>
            <div>
              <span>Instituição:</span>
              <span>Faculdades Oswaldo Cruz</span>
            </div>
            <div>
              <span>Conclusão:</span>
              <span>2016</span>
            </div>
          </div>
        </div>
        
        <div class="curriculo__jobs">
          <h4>Profissional</h4>
          <div class="curriculo__item">
            <div>
              <span>Instituiçao:</span>
              <span>Intelitrader Tecnologia</span>
            </div>
            <div>
              <span>Cargo:</span>
              <span>Desenvolvedor Full Stack .Net</span>
            </div>
            <div>
              <span>Período:</span>
              <span>01/2021 - presente</span>
            </div>
            <div>
              <span>Atividades:</span>
              <span>Desenvolvimento de aplicações web para o mercado financeiro, implementando novas funcionalidades e correções de bugs. Back-end: .Net, Oracle, xUnit, Moq. Front-end: React, Typescript, Jest. CI/CD pipeline com Azure Devops.</span>
            </div>
          </div>

          <div class="curriculo__item">
            <div>
              <span>Instituiçao:</span>
              <span>Piticas</span>
            </div>
            <div>
              <span>Cargo:</span>
              <span>Designer gráfico</span>
            </div>
            <div>
              <span>Período:</span>
              <span>08/2019 a 12/2019</span>
            </div>
            <div>
              <span>Atividades:</span>
              <span>Criação de banners, folhetos, PDV e materiais gráficos promocionais em geral. Artes digitais para redes sociais, banners de site e divulgação de eventos.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="curriculo__graphics">
        <div class="curriculo__lead">
          <img src="../../assets/img/anderson-macedo.jpg" alt="Anderson Macedo" v-if="!showImage">
          <div class="curriculo__skills">
            <h4>Habilidades</h4>
            <label for="html">Front-end:</label>
            <p>Desenvolvimento de interfaces e aplicações web, com: HTML, CSS, Sass, Javascript, React, Vue, Typescript, Jest.</p>
            <label for="html">Back-end:</label>
            <p>Desenvolvimento de api's e aplicações web, com: .Net / C#, testes unitários com xUnit e Moq. Banco de dados relacionais (Oracle e MySql).</p>
            <label for="html">Ferramentas:</label>
            <p>Git, Docker, CI/CD com Azure Pipeline.</p>
          </div>
        </div>

        <div class="curriculo__contact">
          <h4>Contato</h4>
          <span>E-mail:</span>
          <p>andy.carlos.souza@hotmail.com</p>
          <span>Endereço:</span>
          <p>Jardim Helena - São Paulo | SP</p>
          <span>Telefone:</span>
          <p>(11) 4171-1350 | (11) 97032-9784</p>
          <span>Portfólio:</span>
          <p><router-link to="/">www.acsmacedo.netlify.app</router-link></p>
        </div>
      </div>
    </div>

    <div class="curriculo__links">
      <router-link to="/">Voltar</router-link>
      <a href="/curriculo.pdf">Baixar</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Curriculo',
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
      window.addEventListener('resize', () => this.showImageChange());
      window.scrollTo(0, 0);
    }
  }
</script>
