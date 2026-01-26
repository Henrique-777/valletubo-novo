import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-page">
      {/* Hero Section com imagem de fundo */}
      <section className="empresa-imagem">
        <div className="overlay">
          <h2>Sobre nós</h2>
          <p>Conheça a história e os valores que fazem da nossa empresa referência em soluções para sistemas de encanamento.</p>
        </div>
      </section>

      {/* Seção Sobre a Empresa */}
      <section className="sobre">
        <div className="container">
          <div className="sobre-conteudo">
            <h2>Fundação</h2>
            <p>
              Fundada em 2013, a Fábrica Valletubo iniciou suas atividades fabricando mangueiras de polietileno com tecnologia própria. Três anos depois, ampliou suas instalações e diversificou sua produção, incluindo tubos de PVC para irrigação em diversas cores. Em 2022, a introdução de uma injetora marcou uma nova etapa, permitindo a fabricação de conexões, microtubos e microaspersores. Com foco em inovação e qualidade, a Valletubo oferece soluções eficientes para irrigação, priorizando a satisfação de seus clientes.
            </p>
          </div>

          <div className="sobre-conteudo">
            <h2>Nossa História</h2>
            <p>
              A Fábrica Valletubo começou em 2013, produzindo mangueiras de polietileno com uma máquina desenvolvida pelo fundador. Em 2016, expandiu suas operações, incluindo tubos de PVC para irrigação. Em 2022, passou a fabricar conexões, microtubos e microaspersores, ampliando seu portfólio para atender às demandas do mercado agrícola.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Missão e Visão */}
      <section className="sobre">
        <div className="container">
          <div className="sobre-conteudo">
            <h2>Missão</h2>
            <p>
              Nossa missão é oferecer soluções inovadoras e de alta qualidade para sistemas de irrigação, contribuindo para a eficiência e sustentabilidade do agronegócio. Buscamos sempre atender às necessidades dos nossos clientes com produtos confiáveis e um atendimento personalizado.
            </p>
          </div>

          <div className="sobre-conteudo">
            <h2>Visão</h2>
            <p>
              Ser referência nacional em fabricação de sistemas de irrigação, reconhecida pela excelência dos nossos produtos e pelo compromisso com o desenvolvimento sustentável do setor agrícola.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="valores-section">
        <div className="container">
          <h2 className="valores-titulo">Nossos Valores</h2>
          <div className="valores">
            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <h3>Qualidade</h3>
              <p>
                Comprometidos com a excelência, garantimos produtos que atendem aos mais altos padrões de qualidade.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h3>Sustentabilidade</h3>
              <p>
                Priorizamos práticas sustentáveis que minimizem o impacto ambiental e promovam a conservação dos recursos naturais.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3>Foco no Cliente</h3>
              <p>
                Nosso foco é a satisfação dos clientes, oferecendo atendimento personalizado e soluções que atendam às suas necessidades específicas.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <h3>Integridade</h3>
              <p>
                Atuamos com ética e transparência em todas as nossas relações, garantindo confiança e respeito.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Sobre;
