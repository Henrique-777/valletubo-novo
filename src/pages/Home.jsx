import { useState, useEffect } from 'react';
import './Home.css';


const Home = () => {

  // Estados dos pop-up do resumo-catalogo
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Estados Hero Section
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // Script do Carrossel
  // Script do Carrossel
  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;
    
    const slidesDesktop = document.querySelectorAll('.carrossel-slide.desktop-only');
    const slidesMobile = document.querySelectorAll('.carrossel-slide.mobile-only');
    const currentSlides = isMobile() ? slidesMobile : slidesDesktop;
    
    setSlides(Array.from(currentSlides));
    
    if (currentSlides.length === 0) return;
    
    const autoSlideInterval = setInterval(() => {
      setSlideIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % currentSlides.length;
        return newIndex;
      });
    }, 5000);
    
    return () => clearInterval(autoSlideInterval);
  }, []);

useEffect(() => {
  if (slides.length === 0) return;
  
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  
  const indicadores = document.querySelectorAll('.indicador');
  indicadores.forEach((ind, index) => {
    if (index === slideIndex) {
      ind.classList.add('active');
    } else {
      ind.classList.remove('active');
    }
  });
}, [slideIndex, slides]);

const mudarSlide = (n) => {
  setSlideIndex((prevIndex) => {
    const newIndex = prevIndex + n;
    if (newIndex >= slides.length) return 0;
    if (newIndex < 0) return slides.length - 1;
    return newIndex;
  });
};

const slideAtual = (n) => {
  setSlideIndex(n);};

  // Dados dos produtos do resumo-catalogo com informações detalhadas
  const produtos = [
    {
      id: 1,
      nome: "MANGUEIRA DE POLIETILENO",
      imagem: "/assets/img/mangueira-polietileno-1.png",
      descricao: "Mangueiras de polietileno para uso diversos em sistemas de irrigação.",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
        { tipo: "Criar tipo", alcance: "definir" },
        { tipo: "Criar tipo", alcance: "definir" }
      ],
      tamanhos: ["1/2\"", "3/4\"", "1\""],
      cores: ["Preto"],
      materiais: ["PVC", "Polietileno"],
      aplicacoes: ["Hortas", "Jardins", "Gramados", "Pomares"]
    },
    {
      id: 2,
      nome: "MICRO ASPERSORES",
      imagem: "/assets/img/micro-aspersor.png",
      descricao: "Micro aspersores de vazões diversas para irrigação com aspersão.",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
        { tipo: "Criar tipo", alcance: "definir" },
        { tipo: "Criar tipo", alcance: "definir" },
        { tipo: "Criar tipo", alcance: "definir" }
      ],
      tamanhos: ["50l/h", "75l/h", "100l/h", "120l/h"],
      cores: ["Marrom", "Branco", "Azul", "Laranja"],
      materiais: ["PVC", "PEAD", "Polietileno"],
      aplicacoes: ["Irrigação", "Hortas", "Jardins", "Gramados", "Pomares"]
    },
    {
      id: 3,
      nome: "MICROTUBOS",
      imagem: "/assets/img/microtubo.png",
      descricao: "Microtubos para acoplamento em micro aspersores em sistema de irrigação",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
      ],
      tamanhos: ["100mm / 1m"],
      cores: ["Preto"],
      materiais: ["definir"],
      aplicacoes: ["Aspersão", "Microaspersão"]
    },
    {
      id: 4,
      nome: "TUBOS RÍGIDOS",
      imagem: "/assets/img/tubo-rigido.png",
      descricao: "Tubos de PVC para sistemas de irrigação, prediais, construções diversas, etc.",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
      ],
      tamanhos: ["8m"],
      cores: ["Azul"],
      materiais: ["PVC"],
      aplicacoes: ["Diversas"]
    },
    {
      id: 5,
      nome: "REGISTROS DE ESFERA",
      imagem: "/assets/img/registro-esfera-pvc-soldavel.png",
      descricao: "Registros esfera",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
      ],
      tamanhos: ["100mm / 1m"],
      cores: ["Preto"],
      materiais: ["definir"],
      aplicacoes: ["Aspersão", "Microaspersão"]
    },
    {
      id: 6,
      nome: "CONEXÕES PVC",
      imagem: "/assets/img/joelho-32.png",
      descricao: "Joelhos e curvas de PVC",
      variacoes: [
        { tipo: "Criar tipo", alcance: "definir" },
      ],
      tamanhos: ["100mm / 1m"],
      cores: ["Preto"],
      materiais: ["definir"],
      aplicacoes: ["Aspersão", "Microaspersão"]
    }
  ];

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setModalAberto(true);
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoSelecionado(null);
    document.body.style.overflow = 'unset';
  };


  return (
    <div className="home">
      <section className="hero-section">

        {/* Carrossel de imagens */}

        <div className="carrossel">
          {/* SLIDES PARA DESKTOP */}
          <div className="carrossel-slide desktop-only active">
            <img src="/assets/img/capa-0.webp" alt="Slide 1 Desktop" />
          </div>
          <div className="carrossel-slide desktop-only">
            <img src="/assets/img/capa-2.webp" alt="Slide 2 Desktop" />
          </div>
          <div className="carrossel-slide desktop-only">
            <img src="/assets/img/capa-3.webp" alt="Slide 3 Desktop" />
          </div>

          {/* SLIDES PARA MOBILE */}
          <div className="carrossel-slide mobile-only">
            <img src="/assets/img/capa-mobile-1.webp" alt="Slide 1 Mobile" />
          </div>
          <div className="carrossel-slide mobile-only">
            <img src="/assets/img/capa-mobile-2.webp" alt="Slide 2 Mobile" />
          </div>
          <div className="carrossel-slide mobile-only">
            <img src="/assets/img/capa-mobile-3.webp" alt="Slide 3 Mobile" />
          </div>

          {/* Botões de navegação */}
          <button className="carrossel-btn prev" onClick={() => mudarSlide(-1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carrossel-btn next" onClick={() => mudarSlide(1)}>
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicadores */}
          <div className="carrossel-indicadores">
            <span className="indicador active" onClick={() => slideAtual(0)}></span>
            <span className="indicador" onClick={() => slideAtual(1)}></span>
            <span className="indicador" onClick={() => slideAtual(2)}></span>
          </div>
        </div>

        {/* Texto centralizado */}
        <div className="texto-capa"></div>

        {/* Botão central */}
        <div className="botao-central">
          <a href="#catalogo">
            <span className="button-text">Conheça nossos produtos</span>
          </a>
        </div>
      </section>

      {/*SESSÃO VANTAGENS*/}
      <section className="vantagens-section">
        <div className="vantagens-container">
          <div className="vantagem-item">
            <img src="/assets/img/micro-aspersor-2.png" alt="Vantagem 1" className="vantagem-image" />
            <h3>Eficiente</h3>
            <p>Irrigação com precisão, reduzindo o desperdício de água.</p>
          </div>

          <div className="vantagem-item">
            <img src="/assets/img/tubo-pvc-2.png" alt="Vantagem 2" className="vantagem-image" />
            <h3>Durável</h3>
            <p>Fabricado com os materiais mais resistentes do mercado, resistindo ao tempo e uso contínuo.</p>
          </div>

          <div className="vantagem-item">
            <img src="/assets/img/registro-soldavel-2.png" alt="Vantagem 3" className="vantagem-image" />
            <h3>Fácil de instalar</h3>
            <p>Fácil de instalar, em poucos passos, ficando pronto para uso em qualquer sistema de irrigação.</p>
          </div>

          <div className="vantagem-item">
            <img src="/assets/img/tubo-versatil.png" alt="Vantagem 4" className="vantagem-image" />
            <h3>Versátil</h3>
            <p>Ideal para uso em: hortas, pomares e grandes plantações.</p>
          </div>
        </div>
      </section>

      <section className="catalogo" id="catalogo">
      {/*SESSÃO RESUMO CATÁLOGO*/}
        <h2>NOSSOS PRODUTOS</h2>
        <p>Explore uma ampla gama de produtos de alta qualidade, desenvolvidos para atender às necessidades mais exigentes do mercado.</p>
        
        <div className="grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="card">
              <img src={produto.imagem} alt="Mangueira de polietileno" />
              <h3>{produto.nome}</h3>
              <button
                className="ver-mais-btn"
                onClick={() => abrirModal(produto)}
              >
                  VER MAIS
                </button>
            </div>

          ))}
          
        </div>
        <button className="catalogo-btn">Ver catálogos</button>
      </section>

      {/* Modal de Detalhes do Produto */}
      {modalAberto && produtoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fechar" onClick={fecharModal}>
              ✕
            </button>
            
            <div className="modal-header">
              <img 
                src={produtoSelecionado.imagem} 
                alt={produtoSelecionado.nome}
                className="modal-imagem"
              />
              <div className="modal-titulo-descricao">
                <h2>{produtoSelecionado.nome}</h2>
                <p>{produtoSelecionado.descricao}</p>
              </div>
            </div>

            <div className="modal-detalhes">
              {/* Variações */}
              <div className="detalhe-secao">
                <h3>Variações Disponíveis</h3>
                <div className="variacoes-grid">
                  {produtoSelecionado.variacoes.map((variacao, index) => (
                    <div key={index} className="variacao-card">
                      <strong>{variacao.tipo}</strong>
                      <span>{variacao.alcance || variacao.pressao || variacao.malha || variacao.capacidade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tamanhos */}
              <div className="detalhe-secao">
                <h3>Tamanhos</h3>
                <div className="opcoes-lista">
                  {produtoSelecionado.tamanhos.map((tamanho, index) => (
                    <span key={index} className="opcao-badge">{tamanho}</span>
                  ))}
                </div>
              </div>

              {/* Cores */}
              <div className="detalhe-secao">
                <h3>Cores Disponíveis</h3>
                <div className="opcoes-lista">
                  {produtoSelecionado.cores.map((cor, index) => (
                    <span key={index} className="opcao-badge opcao-cor">{cor}</span>
                  ))}
                </div>
              </div>

              {/* Materiais */}
              <div className="detalhe-secao">
                <h3>Materiais</h3>
                <div className="opcoes-lista">
                  {produtoSelecionado.materiais.map((material, index) => (
                    <span key={index} className="opcao-badge">{material}</span>
                  ))}
                </div>
              </div>

              {/* Aplicações */}
              <div className="detalhe-secao">
                <h3>Aplicações Ideais</h3>
                <div className="aplicacoes-lista">
                  {produtoSelecionado.aplicacoes.map((aplicacao, index) => (
                    <span key={index} className="aplicacao-item">✓ {aplicacao}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-contato">Solicitar Orçamento</button>
              <button className="btn-secundario" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}


      <section className="fornecedores">
        {/*SESSÃO FORNECEDORES*/}
        <h2>CONHEÇA NOSSOS FORNECEDORES</h2>
        <p>Valorizamos parcerias com fornecedores que compartilham nossos valores de qualidade, inovação e eficiência. Juntos, garantimos produtos e serviços que atendem às necessidades dos nossos clientes com excelência.</p>
        
        <div className="grid">
          <div className="card">
            <img src="/assets/img/braskem-logo.svg" alt="Braskem" />
          </div>

          <div className="card">
            <img src="/assets/img/baerlocher-logo.svg" alt="Baerlocher" />
          </div>

          <div className="card">
            <img src="/assets/img/carbomil-logo.svg" alt="Carbomil" />
          </div>

          <div className="card">
            <img src="/assets/img/piramidal-logo.svg" alt="Piramidal" />
          </div>

          <div className="card">
            <img src="/assets/img/color-master.svg" alt="Color Master" />
          </div>

          <div className="card">
            <img src="/assets/img/dry-color.svg" alt="Dry Color" />
          </div>
        </div>

      </section>

      <section className="cta-section">
        <h3>Soluções em Tubos e Conexões</h3>
          <p>Fabricamos qualidade e inovação para sistemas de irrigação, abastecimento e encanamento.</p>
          <button className="cta-button">VER CATÁLOGO</button>
      </section>
    </div>
  );
};

export default Home;
