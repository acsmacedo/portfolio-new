<template>
  <section class="curriculo">
    <div class="curriculo__container">
      <div class="curriculo__info">
        <div class="curriculo__header">
          <img src="../../assets/img/testemonials-2.jpg" alt="" v-if="showImage">
          <h3>Anderson Macedo</h3>
          <span>Desenvolvedor front-end</span>
          <p>Desde o início da minha carreira atuei como designer gráfico, porém, neste novo ciclo da minha vida, busco ingressar na área de desenvolvimento front-end.</p>
          <p>Comecei a buscar conhecimento nessa área no início de 2020 e, desde então, desenvolvi alguns projetos pessoais. Tenho facilidade e interesse em aprender novas tecnologias e linguagens.</p>
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
              <span>Criação de peças promocionais, artes para redes sociais e eventos, banners para site.</span>
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
              <span>Criação de banners, folhetos e materiais gráficos em geral. Criação de sites, landing page, redes sociais e peças digitais em geral.</span>
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
              <span>10/2015 a 10/2016 (estágio)</span>
            </div>
            <div>
              <span></span>
              <span>10/2016 a 10/2018</span>
            </div>
            <div>
              <span>Atividades:</span>
              <span>Diagramação de catálogos, criação de email MKT, materiais de PDV, desenvolvimento gráfico de produtos (cadernos, agendas e estojos).</span>
            </div>
          </div>
        </div>
      </div>

      <div class="curriculo__graphics">
        <div class="curriculo__lead">
          <img src="../../assets/img/testemonials-2.jpg" alt="" v-if="!showImage">
          <p>"Organizado. Flexível. Detalhista. É a partir desses atributos que me posiciono diante das minhas tarefas e deveres".</p>
          <div class="curriculo__skills">
            <h4>Habilidades</h4>
            <label for="html">HTML</label>
            <meter min="0" max="100" value="90" id="html"></meter>

            <label for="css">CSS</label>
            <meter min="0" max="100" value="90" id="css"></meter>

            <label for="sass">Sass</label>
            <meter min="0" max="100" value="90" id="sass"></meter>

            <label for="javascript">Javascript</label>
            <meter min="0" max="100" value="70" id="javascript"></meter>

            <label for="jquery">JQuery</label>
            <meter min="0" max="100" value="60" id="jquery"></meter>

            <label for="vue">Vue</label>
            <meter min="0" max="100" value="70" id="vue"></meter>
            
            <label for="git">Git / Github</label>
            <meter min="0" max="100" value="90" id="git"></meter>
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
          <p><a href="https://www.acsmacedo.netlify.app">www.acsmacedo.netlify.app</a></p>
        </div>
      </div>
    </div>

    <div class="curriculo__links">
      <a v-on:click.prevent="backPage">voltar</a>
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
