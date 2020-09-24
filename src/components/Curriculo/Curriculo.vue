<template>
  <section class="curriculo">
    <div class="curriculo__container">
      <div class="curriculo__info">
        <div class="curriculo__header">
          <img src="../../assets/img/testemonials-2.jpg" alt="" v-if="showImage">
          <h3>Anderson Macedo</h3>
          <span>Desenvolvedor front-end</span>
          <p>Focado. Flexível. Detalhista. É a partir dessas características que me posiciono diante das minhas tarefas e deveres, tentando aliar, da melhor forma possível, o design com o tentando aliar, da melhor forma possível, o design com o</p>
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
          <h4>Experiência</h4>
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
              <span>Criação de banners, folhetos e materiais gráficos em geral. Criação de sites, landing page</span>
            </div>
          </div>

          <div class="curriculo__item">
            <div>
              <span>Instituiçao:</span>
              <span>Imaginara Comunicação</span>
            </div>
            <div>
              <span>Cargo:</span>
              <span>Designer gráfico</span>
            </div>
            <div>
              <span>Período:</span>
              <span>04/2019 a 07/2019</span>
            </div>
            <div>
              <span>Atividades:</span>
              <span>Criação de banners, folhetos e materiais gráficos em geral. Criação de sites, landing page</span>
            </div>
          </div>
     
          <div class="curriculo__item">
            <div>
              <span>Instituiçao:</span>
              <span>Indústria Gráfica Foroni</span>
            </div>
            <div>
              <span>Cargo:</span>
              <span>Designer gráfico</span>
            </div>
            <div>
              <span>Período:</span>
              <span>04/2019 a 07/2019</span>
            </div>
            <div>
              <span>Atividades:</span>
              <span>Criação de banners, folhetos e materiais gráficos em geral. Criação de sites, landing page</span>
            </div>
          </div>
        </div>
      </div>

      <div class="curriculo__graphics">
        <div>
          <img src="../../assets/img/testemonials-2.jpg" alt="" v-if="!showImage">
          
          <div class="curriculo__skills">
            <h4>Habilidades</h4>
            <label for="">HTML</label>
            <meter min="0" max="100" value="50"></meter>

            <label for="">CSS</label>
            <meter min="0" max="100" value="50"></meter>

            <label for="">Sass</label>
            <meter min="0" max="100" value="50"></meter>

            <label for="">Javascript</label>
            <meter min="0" max="100" value="50"></meter>

            <label for="">JQuery</label>
            <meter min="0" max="100" value="50"></meter>

            <label for="">Vue</label>
            <meter min="0" max="100" value="50"></meter>
            
            <label for="">Git</label>
            <meter min="0" max="100" value="50"></meter>
          </div>
        </div>

        <div class="curriculo__contact">
          <span>E-mail:</span>
          <p>andy.carlos.souza@hotmail.com</p>
          <span>Endereço:</span>
          <p>Jardim Helena - São Paulo | SP</p>
          <span>Telefone:</span>
          <p>(11) 4171-1350 | (11) 97032-9784</p>
          <span>Portfólio:</span>
          <p>www.acsmacedo.netlify.app</p>
        </div>
      </div>
    </div>

    <div class="curriculo__links">
      <a v-on:click.prevent="backPage">voltar</a>
      
      <a>Baixar</a>
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
      },
      backPage() {
        this.$router.back();
      }
    },
     mounted() {
      this.showImageChange();
      
      window.addEventListener('resize', () => {
        this.showImageChange();
      })

      window.scrollTo(0, 0);
    }
  }
</script>
