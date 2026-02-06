import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Estados dos pop-up do resumo-catalogo
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Estados do Modal Promocional
  const [modalPromoAberto, setModalPromoAberto] = useState(false);

  // Estados Hero Section
  const [slideIndex, setSlideIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  // Modal abre SEMPRE ao carregar a página
  useEffect(() => {
    // Delay de 500ms para suavizar a abertura
    const timer = setTimeout(() => {
      setModalPromoAberto(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []); // Array vazio = executa apenas no mount (toda vez que a página carregar)

  // Função para fechar modal promocional
  const fecharModalPromo = () => {
    setModalPromoAberto(false);
    document.body.style.overflow = 'unset';
  };

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalPromoAberto) {
        fecharModalPromo();
      }
    };

    if (modalPromoAberto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalPromoAberto]);

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
    setSlideIndex(n);
  };

  // Dados dos produtos do resumo-catalogo com informações detalhadas
  const produtos = [
    {
      id: 1,
      nome: "MANGUEIRA DE POLIETILENO",
      imagem: "assets/img/mangueira-polietileno-1.png",
      descricao: "Mangueiras de polietileno para uso diversos em sistemas de irrigação.",
      tamanhos: ['MANGUEIRA 16MM - 500M', 'MANGUEIRA 16MM - 200M', 'MANGUEIRA 1/2 100M', 'MANGUEIRA 3/4- 100M', 'MANGUEIRA 1\" - 100M', 'MANGUEIRA 1.1/4\" - 50M', 'MANGUEIRA 1.1/2\" - 50M', 'MANGUEIRA 1x3.00MM', 'TUBO PEBDA DI 40MM - 6M'],
      cores: ["Preto"],
      materiais: ['Polietileno'],
      aplicacoes: ["Plantações","Hortas", "Jardins", "Gramados", "Pomares"]
    },
    {
      id: 2,
      nome: "MICRO ASPERSORES",
      imagem: "assets/img/micro-aspersores.webp",
      descricao: "Micro aspersores de vazões diversas para irrigação com aspersão.",
      tamanhos: ['MICRO ASPERSOR 50 L/H BRANCO', 'MICRO ASPERSOR 75 L/H MARROM', 'MICRO ASPERSOR 100 L/H LARANJA', 'MICRO ASPERSOR 120 L/H AZUL'],
      cores: ["Marrom", "Branco", "Azul", "Laranja"],
      materiais: ["PEAD", "Polietileno"],
      aplicacoes: ['Irrigação residencial', 'Jardins', "Gramados", "Pomares"]
    },
    {
      id: 3,
      nome: "MICROTUBOS",
      imagem: "assets/img/microtubo.png",
      descricao: "Microtubos para acoplamento em micro aspersores em sistema de irrigação",
      tamanhos: ["MICROTUBO 4/6 X 100 CM C/ CONECTOR"],
      cores: ["Preto"],
      materiais: ['PEAD', 'Polietileno'],
      aplicacoes: ["Aspersão", "Microaspersão"]
    },
    {
      id: 4,
      nome: "TUBOS RÍGIDOS",
      imagem: "assets/img/tubo-rigido.png",
      descricao: "Tubos de PVC para sistemas de irrigação, prediais, construções diversas, etc.",
      tamanhos: ["TUBO PVC RÍGIDO PN40 - 35M", "TUBO PVC RÍGIDO PN40 - 50MM", "TUBO PVC RÍGIDO PN40 - 75MM", "TUBO PVC RÍGIDO PN40 - 100MM", "TUBO PVC RÍGIDO PN60 20MM C/ 6M", "TUBO PVC RÍGIDO PN60 25MM C/ 6M", "TUBO PVC RÍGIDO PN60 32MM C/ 6M", "TUBO PVC RÍGIDO PN80 - 50MM", "TUBO PVC RÍGIDO PN80 - 75MM", "TUBO PVC RÍGIDO PN80 - 100MM"],
      cores: ["Azul"],
      materiais: ["PVC"],
      aplicacoes: ["Diversas"]
    },
    {
      id: 5,
      nome: "REGISTROS DE ESFERA",
      imagem: "assets/img/registro-pvc-rosca-interna.webp",
      descricao: "Registros esfera PVC",
      tamanhos: ['REG. DE ESFERA ROSCA INTERNA PVC AZUL 1"'],
      cores: ["Azul"],
      materiais: ["PVC"],
      aplicacoes: ["Aspersão", "Microaspersão"]
    },
    {
      id: 6,
      nome: "CONEXÕES PVC",
      imagem: "assets/img/joelho-32.png",
      descricao: "Joelhos e curvas de PVC",
      tamanhos: ['JOELHO 90º SOLDÁVEL - DN 20MM', 'JOELHO 90º SOLDÁVEL - DN 25MM', 'JOELHO 90º SOLDÁVEL - DN 32MM', 'JOELHO 90º SOLDÁVEL - DN 50MM'],
      cores: ["Azul"],
      materiais: ["PVC"],
      aplicacoes: ["Diversas"]
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
      {/* Modal Promocional do Produto Exclusivo */}
      {modalPromoAberto && (
        <div className="modal-promo-overlay" onClick={fecharModalPromo} role="dialog" aria-modal="true" aria-labelledby="modal-promo-titulo">
          <div className="modal-promo-content" onClick={(e) => e.stopPropagation()}>
            {/* Botão Fechar (X) */}
            <button className="modal-promo-fechar" onClick={fecharModalPromo} aria-label="Fechar modal">
              ✕
            </button>

            {/* Contêudo do Modal */}
            <div className="modal-promo-body">
              {/* Coluna da esquerda - Vídeo */}
              <div className="modal-promo-video-wrapper">
                <div className="modal-promo-video-container">
                  <video 
                    className="modal-promo-video" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    controls
                    poster="assets/img/thumb-video.png" /* opcional: thumbnail antes do play */
                    aria-label="Vídeo explicativo do novo produto"
                  >
                    <source src="assets/videos/video-valvula-auto-limpante.mp4" type="video/mp4" />
                    <source src="assets/videos/novo-produto.webm" type="video/webm" />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              </div>

              {/* Coluna da direita - Textos, cards e botões */}
              <div className="modal-promo-content-wrapper">
                <div className="modal-promo-badge">
                  🌟 LANÇAMENTO EXCLUSIVO
                </div>

                <h2 id="modal-promo-titulo" className="modal-promo-titulo">
                  CONHEÇA A VÁLVULA AUTO-LIMPANTE!
                </h2>

                <p className="modal-promo-texto">
                  Mais eficiência, menos manutenção e maior confiabilidade para sistemas de irrigação.
                </p>

                <p className="modal-promo-texto">
                  Assim que o sistema de irrigação é acionado, a água percorre a linha realizando
                  automaticamente a limpeza dos resíduos acumulados.
                  Após essa etapa,<strong> a válvula veda de forma precisa,</strong> permitindo
                  que os sistemas de microaspersão e gotejamento operem de maneira estável e contínua.
                  O resultado é a <strong> redução significativa de entupimentos, </strong>falhas de
                  funcionamento e paradas desnecessárias..
                </p>

                {/* Destaques */}
                <div className="modal-promo-destaques">
                  <div className="modal-promo-destaque-item">
                    <span className="modal-promo-icone">💧</span>
                    <span>Economia de água extrema!</span>
                  </div>
                  <div className="modal-promo-destaque-item">
                    <span className="modal-promo-icone">⭐</span>
                    <span>Exclusividade Valletubo</span>
                  </div>
                  <div className="modal-promo-destaque-item">
                    <span className="modal-promo-icone">⚡</span>
                    <span>Instalação rápida</span>
                  </div>
                </div>

                {/* Botões CTA */}
                <div className="modal-promo-acoes">
                  <button 
                    className="modal-promo-btn-principal"
                    onClick={() => {
                      fecharModalPromo();
                      navigate('/ProdutosLancamento'); // ou URL externa
                      // Para URL externa: window.open('https://...', '_blank');
                    }}
                  >
                    Saiba Mais
                  </button>
                  <button className="modal-promo-btn-secundario" onClick={fecharModalPromo}>
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="hero-section">
        {/* Carrossel de imagens */}
        <div className="carrossel">
          {/* SLIDES PARA DESKTOP */}
          <div className="carrossel-slide desktop-only active">
            <img src="assets/img/capa-0.webp" alt="Slide 1 Desktop" />
          </div>
          <div className="carrossel-slide desktop-only">
            <img src="assets/img/capa-2.webp" alt="Slide 2 Desktop" />
          </div>
          <div className="carrossel-slide desktop-only">
            <img src="assets/img/capa-3.webp" alt="Slide 3 Desktop" />
          </div>

          {/* SLIDES PARA MOBILE */}
          <div className="carrossel-slide mobile-only">
            <img src="assets/img/capa-mobile-1.webp" alt="Slide 1 Mobile" />
          </div>
          <div className="carrossel-slide mobile-only">
            <img src="assets/img/capa-mobile-2.webp" alt="Slide 2 Mobile" />
          </div>
          <div className="carrossel-slide mobile-only">
            <img src="assets/img/capa-mobile-3.webp" alt="Slide 3 Mobile" />
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

        {/* Botão central */}
        <div className="botao-central">
          <button onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <span className="button-text">Conheça nossos produtos</span>
          </button>
        </div>
      </section>

      {/* SESSÃO VANTAGENS */}
      <section className="vantagens-section">
        <div className="vantagens-container">
          <div className="vantagem-item">
            <img src="assets/img/micro-aspersor-2.png" alt="Vantagem 1" className="vantagem-image" />
            <h3>Eficiente</h3>
            <p>Irrigação com precisão, reduzindo o desperdício de água.</p>
          </div>
          <div className="vantagem-item">
            <img src="assets/img/tubo-pvc-2.png" alt="Vantagem 2" className="vantagem-image" />
            <h3>Durável</h3>
            <p>Fabricado com os materiais mais resistentes do mercado, resistindo ao tempo e uso contínuo.</p>
          </div>
          <div className="vantagem-item">
            <img src="assets/img/registro-soldavel-2.png" alt="Vantagem 3" className="vantagem-image" />
            <h3>Fácil de instalar</h3>
            <p>Fácil de instalar, em poucos passos, ficando pronto para uso em qualquer sistema de irrigação.</p>
          </div>
          <div className="vantagem-item">
            <img src="assets/img/tubo-versatil.png" alt="Vantagem 4" className="vantagem-image" />
            <h3>Versátil</h3>
            <p>Ideal para uso em hortas, pomares e grandes plantações.</p>
          </div>
        </div>
      </section>

      <section className="catalogo" id="catalogo">
        {/* SESSÃO RESUMO CATÁLOGO */}
        <h2>NOSSOS PRODUTOS</h2>
        <p>Explore uma ampla gama de produtos de alta qualidade, desenvolvidos para atender às necessidades mais exigentes do mercado.</p>
        <div className="grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="card">
              <img src={produto.imagem} alt="Mangueira de polietileno" />
              <h3>{produto.nome}</h3>
              
              <button className="ver-mais-btn" onClick={() => abrirModal(produto)}>
                VER MAIS
              </button>
            </div>
          ))}
        </div>
        <button className="catalogo-btn" onClick={() => navigate('/Produtos')}>
          Ver catálogos
        </button>
      </section>

      {/* Modal de Detalhes do Produto */}
      {modalAberto && produtoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fechar" onClick={fecharModal}>
              ✕
            </button>
            <div className="modal-header">
              <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="modal-imagem" />
              <div className="modal-titulo-descricao">
                <h2>{produtoSelecionado.nome}</h2>
                <p>{produtoSelecionado.descricao}</p>
              </div>
            </div>
            <div className="modal-detalhes">
              {/* Tamanhos */}
              <div className="detalhe-secao">
                <h3>Variações disponíveis</h3>
                <div className="tamanhos-lista">
                  {produtoSelecionado.tamanhos.map((tamanho, index) => (
                    <span key={index} className="tamanho-item">{tamanho}</span>
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
                    <span key={index} className="aplicacao-item">{aplicacao}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a className="btn-contato" href="https://wa.me/5587981543414?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20tubos%20e%20conex%C3%B5es." target="_blank">
                Solicitar Orçamento
              </a>
              <button className="btn-secundario" onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* Seção de Lançamentos */}
      <section className="lancamentos" id="lancamentos">
        <h2>Lançamentos</h2>
        <p>Confira as últimas novidades em produtos para irrigação</p>
        
        <div className="lancamentos-grid">
          <div className="lancamento-card">
            <span className="badge-novo">NOVO</span>
            <img 
              src="assets/img/valvula-auto-limpante-anel-liso.png" 
              alt="Válvula Autolimpante" 
            />
            <h3>Válvula Autolimpante</h3>
            <p>Sistema inteligente de limpeza automática para máxima eficiência</p>
            <button onClick={() => navigate('/ProdutosLancamento')} className="lancamento-btn">Saiba Mais</button>
          </div>

          <div className="lancamento-card">
            <span className="badge-novo">NOVO</span>
            <img 
              src="assets/img/tubo-de-comando.png" 
              alt="Kit Irrigação Completo" 
            />
            <h3>Tubo de Comando Para Automação</h3>
            <p>Solução completa para jardins e hortas residenciais</p>
            <button onClick={() => navigate('/ProdutosLancamento')} className="lancamento-btn">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* Seção de Fornecedores */}
      <section className="fornecedores">
        {/* SESSÃO FORNECEDORES */}
        <h2>CONHEÇA NOSSOS FORNECEDORES</h2>
        <p>Valorizamos parcerias com fornecedores que compartilham nossos valores de qualidade, inovação e eficiência. Juntos, garantimos produtos e serviços que atendem às necessidades dos nossos clientes com excelência.</p>
        <div className="grid">
          <div className="card">
            <img src="assets/img/braskem-logo.svg" alt="Braskem" />
          </div>
          <div className="card">
            <img src="assets/img/baerlocher-logo.svg" alt="Baerlocher" />
          </div>
          <div className="card">
            <img src="assets/img/carbomil-logo.svg" alt="Carbomil" />
          </div>
          <div className="card">
            <img src="assets/img/piramidal-logo.svg" alt="Piramidal" />
          </div>
          <div className="card">
            <img src="assets/img/color-master.svg" alt="Color Master" />
          </div>
          <div className="card">
            <img src="assets/img/dry-color.svg" alt="Dry Color" />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Soluções em Tubos e Conexões</h3>
        <p>Fabricamos qualidade e inovação para sistemas de irrigação, abastecimento e encanamento.</p>
        <button onClick={() => navigate('/Produtos')} className="cta-button">
          VER CATÁLOGO
        </button>
      </section>
    </div>
  );
};

export default Home;
