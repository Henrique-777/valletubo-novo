import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProdutosLancamento.css';

const ProdutosLancamento = () => {
  const navigate = useNavigate();
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [animarCards, setAnimarCards] = useState(false);

  // Animar cards ao carregar
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimarCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Dados dos produtos Exclusividade
  const produtosLancamento = [
    {
      id: 1,
      nome: "Válvula Autolimpante",
      imagem: "assets/img/valvula-auto-limpante.webp",
      descricao: "Válvula Autolimpante de limpeza automática para irrigação com eficiência máxima e redução de entupimentos.",
      categoria: "Sistemas de Irrigação",
      destaque: "Novidade",
      caracteristicas: [
        "VÁLVULA AUTO LIMPANTE 16MM COM ANEL GARRA",
        "VÁLVULA AUTO LIMPANTE 16MM COM ANEL LISO"
      ],
      badge: "EXCLUSIVO"
    },
    {
      id: 2,
      nome: "Tubo de Comando Para Automação",
      imagem: "assets/img/tubo-de-comando.png",
      descricao: "Tubo de comando de alta durabilidade para montagem de microaspersores e válvulas hidráulicas. Instalação rápida e resistência máxima.",
      categoria: "Sistemas de Irrigação",
      destaque: "Novidade",
      caracteristicas: [
        "TUBO DE COMANDO PARA AUTOMAÇÃO 8MM"
      ],
      badge: "LANÇAMENTO"
    }
  ];

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setModalAberto(true);
    document.body.style.overflow = 'hidden';
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoSelecionado(null);
    document.body.style.overflow = 'unset';
  };

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && modalAberto) {
        fecharModal();
      }
    };

    if (modalAberto) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [modalAberto]);

  return (
    <div className="produtos-lancamento">
      {/* Hero Section */}
      <section className="hero-lancamento">
        <div className="hero-overlay"></div>
        <div className="hero-conteudo">
          <span className="hero-badge">Novidades</span>
          <h1 className="hero-titulo">Produtos Lançamento</h1>
          <p className="hero-subtitulo">
            Conheça as últimas inovações em sistemas de irrigação com tecnologia de ponta e máxima eficiência
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-numero">2</span>
              <span className="stat-texto">Lançamentos</span>
            </div>
            <div className="stat-item">
              <span className="stat-numero">100%</span>
              <span className="stat-texto">Inovação</span>
            </div>
            <div className="stat-item">
              <span className="stat-numero">2026</span>
              <span className="stat-texto">Tecnologia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cards de Produtos */}
      <section className="secao-produtos-lancamento">
        <div className="secao-header">
          <h2>Lançamentos</h2>
          <p>Explore nossa linha de exclusividades com as mais recentes tecnologias do mercado</p>
        </div>

        <div className="grid-produtos-lancamento">
          {produtosLancamento.map((produto, index) => (
            <div
              key={produto.id}
              className={`card-produto-lancamento ${animarCards ? 'animar' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="badge-lancamento">{produto.badge}</div>
              
              <div className="card-imagem-wrapper">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="card-imagem"
                  onError={(e) => {
                    e.target.src = 'assets/img/placeholder-produto.png';
                  }}
                />
              </div>

              <div className="card-conteudo">
                <span className="card-categoria">{produto.categoria}</span>
                <h3 className="card-titulo">{produto.nome}</h3>
                <p className="card-descricao">{produto.descricao}</p>

                <div className="card-destaque">
                  <span className="icone-destaque">✨</span>
                  <span>{produto.destaque}</span>
                </div>

                <button
                  className="btn-ver-detalhes"
                  onClick={() => abrirModal(produto)}
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-lancamento">
        <div className="cta-conteudo">
          <h3>Interessado em nossos lançamentos?</h3>
          <p>Entre em contato e saiba mais sobre disponibilidade, preços e condições especiais</p>
          <button onClick={() => navigate('/Contato')} className="btn-cta-principal">Fale Conosco</button>
        </div>
      </section>

      {/* Modal de Detalhes */}
      {modalAberto && produtoSelecionado && (
        <div className="modal-overlay-lancamento" onClick={fecharModal}>
          <div className="modal-content-lancamento" onClick={(e) => e.stopPropagation()}>
            <button className="modal-fechar-lancamento" onClick={fecharModal}>
              ×
            </button>

            <div className="modal-header-lancamento">
              <img
                src={produtoSelecionado.imagem}
                alt={produtoSelecionado.nome}
                className="modal-imagem-lancamento"
                onError={(e) => {
                  e.target.src = 'assets/img/placeholder-produto.png';
                }}
              />
              <div className="modal-info">
                <span className="modal-badge">{produtoSelecionado.badge}</span>
                <h2>{produtoSelecionado.nome}</h2>
                <span className="modal-categoria">{produtoSelecionado.categoria}</span>
              </div>
            </div>

            <div className="modal-body-lancamento">
              <div className="modal-secao">
                <h4>Descrição</h4>
                <p>{produtoSelecionado.descricao}</p>
              </div>

              <div className="modal-secao">
                <h4>Características Principais</h4>
                <ul className="lista-caracteristicas">
                  {produtoSelecionado.caracteristicas.map((carac, index) => (
                    <li key={index}>
                      <span className="check-icon">✓</span>
                      {carac}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer-lancamento">
              <button 
              onClick={() => window.open('https://wa.me/5587981543414', '_blank')}
              className="btn-modal-contato"
              >
                Solicitar Orçamento
              </button>
              <button className="btn-modal-secundario" onClick={fecharModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProdutosLancamento;
