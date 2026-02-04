import { useState } from 'react';
import './CatalogoMangueiras.css';

const CatalogoMangueiras = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Array com todos os produtos do catálogo
  const produtos = [
    {
      id: 1,
      nome: "MANGUEIRA DE POLIETILENO",
      imagem: "assets/img/mangueira-polietileno-1.png",
      descricao: "Mangueira de polietileno com tamanhos diversos.",
      tamanhos: ["MANGUEIRA 16MM - 500M", "MANGUEIRA 16MM - 200M", "MANGUEIRA 1/2 100M", 
        "MANGUEIRA 3/4- 100M", "MANGUEIRA 1' - 100M", "MANGUEIRA 1.1/4' - 50M", "MANGUEIRA 1.1/2' - 50M", "MANGUEIRA 1x3.00MM", "TUBO PEBDA DI 40MM - 6M"],
      especificacoes: ["Material: Polietileno"],
      aplicacoes: ["Irrigação", "Sistemas agrícolas", "Hortas"]
    },
    {
      id: 2,
      nome: "TUBO DE COMANDO PARA AUTOMAÇÃO",
      imagem: "assets/img/tubo-de-comando.png",
      descricao: "TUBO DE COMANDO.",
      tamanhos: ["TUBO DE COMANDO PARA AUTOMAÇÃO 8MM"],
      especificacoes: ["Diâmetro: 8mm"],
      aplicacoes: ["Irrigação", "Sistemas agrícolas", "Hortas"]
    },
    {
      id: 3,
      nome: "MICRO ASPERSOR",
      imagem: "assets/img/micro-aspersores.webp",
      descricao: "Micro aspersores com vazões diversas.",
      tamanhos: ['MICRO ASPERSOR 50 L/H BRANCO', 'MICRO ASPERSOR 75 L/H MARROM',
                'MICRO ASPERSOR 100 L/H LARANJA', 'MICRO ASPERSOR 120 L/H AZUL'],
      aplicacoes: ["Irrigação residencial", "Jardins", "Hortas domésticas"]
    },
    {
      id: 4,
      nome: "MINI GOTEJADOR",
      imagem: "assets/img/mini_gotejador.png",
      descricao: 'MINI GOTEJADOR'
    },
    {
      id: 5,
      nome: "MICROTUBO C/ CONECTOR",
      imagem: "assets/img/microtubo.png",
      descricao: ["Microtubo para acoplamento em micro aspersor."],
      especificacoes: ["Comprimento: 100mm", "Material: Polietileno"],
      tamanhos: ["MICROTUBO 4/6 X 100 CM C/ CONECTOR"],
      aplicacoes: ['Acoplamento em Micro Aspersores', "Irrigação", "Agricultura"]
    },
    {
      id: 6,
      nome: "COLAR DE TOMADA",
      imagem: 'assets/img/colar-de-tomada.png',
      tamanhos: ['COLAR DE TOMADA 50MM C/ ROSCA 1"', 'COLAR DE TOMADA 75MM c/ ROSCA 1"',
                'COLAR DE TOMADA 100MM c/ ROSCA 1"'
      ]
    },
    {
      id: 7,
      nome: "VÁLVULA DUPLO EFEITO",
      imagem: "assets/img/valvula-duplo-efeito-1pol.png",
      tamanhos: ['VÁLVULA DUPLO EFEITO 1"', 'VÁLVULA DUPLO EFEITO 3/4"']
    },
    {
      id: 8,
      nome: "VÁLVULA AUTO LIMPANTE",
      imagem: "assets/img/valvula-auto-limpante-anel-garra.png",
      descricao: "Válvula Auto Limpante para desobstrução de sistemas de irrigação.",
      especificacoes: ['Variação 1: Anel Garra', 'Variação 2: Anel Liso'],
      tamanhos: ['VÁLVULA AUTO LIMPANTE 16MM COM ANEL GARRA', 'VÁLVULA AUTO LIMPANTE 16MM COM ANEL LISO'],
      aplicacoes: ['Desobstrução de sistemas de irrigação']
    },
    {
      id: 9,
      nome: "ESTACA",
      imagem: "assets/img/estaca.png",
      descricao: "Estaca Universal.",
      tamanhos: ['UNIVERSAL - 300MM', 'UNIVERSAL: 600MM'],
      aplicacoes: ["Acoplamento com Micro Aspersor"]
    },
    {
      id: 10,
      nome: "TAMPÃO",
      imagem: "assets/img/tampao.png",
      descricao: "Tampão.",
      tamanhos: ['TAMPÃO 4/5 (MILHEIRO)', 'TAMPÃO 4/7 (MILHEIRO)']
    },
    {
      id: 11,
      nome: "CHULA BILABIAL 17MM",
      imagem: "assets/img/chula-bilabial.png",
      tamanhos: ['CHULA BILABIAL 17MM']
    },
    {
      id: 12,
      nome: "CONECTOR INICIAL COM ANEL LISO",
      imagem: "assets/img/conector-inicial.webp",
      descricao: "Conector Inicial",
      especificacoes: ['Variação 1: Anel Liso', 'Variação 2: Anel Garra'],
      tamanhos: ['CONECTOR INICIAL 16MM COM ANEL LISO', 'CONECTOR INICIAL 16MM COM ANEL GARRA']
    },
    {
      id: 13,
      nome: "TAMPÃO COM ABA PARA CHULA",
      imagem: "assets/img/tampao-com-aba.png",
      descricao: "Tampão com aba para acoplamento em Chula Bilabial.",
      tamanhos: ['TAMPÃO COM ABA PARA CHULA 16MM']
    },
    {
      id: 14,
      nome: "TAMPÃO DUPLO",
      imagem: "assets/img/tampao-duplo.png",
      tamanhos: ['TAMPÃO DUPLO (PLUG) 4/6']
    },
    {
      id: 15,
      nome: "VÁLVULA ANTI-VÁCUO",
      imagem: "assets/img/valvula-anti-vacuo.png",
      descricao: 'Válvula anti-vácuo para Chula Bilabial',
      tamanhos: ['VÁLVULA ANTI-VÁCUO (VENTOSA) PARA CHULA 16MM']
    },
    {
      id: 16,
      nome: "ADAPTADOR ESPIGÃO",
      imagem: "assets/img/espigao.png",
      tamanhos: ['ADAPTADOR ESPIGÃO C/ ROSCA EXT. 1"', 'ADAPTADOR ESPIGÃO C/ ROSCA EXT. 1" X 1/2',
                  'ADAPTADOR ESPIGÃO C/ ROSCA EXT. 1" X 3/4', 'ADAPTADOR ESPIGÃO C/ ROSCA EXT. 3/4',
                  'ADAPTADOR ESPIGÃO C/ ROSCA EXT. 3/4 X 1"', 'ADAPTADOR ESPIGÃO C/ ROSCA EXT. 3/4 X 1/2"'
      ]
    },
    {
      id: 17,
      nome: "CONECTOR P/ MICROTUBO",
      imagem: "assets/img/conector-p-microtubo-4x5mm.png",
      tamanhos: ['CONECTOR P/ MICROTUBO 4/5MM']
    },
    {
      id: 18,
      nome: "FIM DE LINHA 16MM",
      imagem: "assets/img/fim-de-linha.webp",
      especificacoes: ["Variação 1: Anel Garra", 'Variação 2: Anel Liso'],
      tamanhos: ['FIM DE LINHA 16MM COM ANEL GARRA', 'FIM DE LINHA 16MM COM ANEL LISO']
    },
    {
      id: 19,
      nome: "JOELHO 16MM",
      imagem: "assets/img/joelho-16mm.webp",
      especificacoes: ['Variação 1: Anéis Liso e Garra', 'Varição 2: Anéis Garra', 'Variação 3: Anéis Lisos'],
      tamanhos: ['JOELHO 16MM COM ANÉIS LISO E GARRA', 'JOELHO 16MM COM ANÉIS GARRA', 'JOELHO 16MM COM ANÉIS LISO']
    },
    {
      id: 20,
      nome: "Y INICIAL 16MM",
      imagem: "assets/img/y-inicial.webp",
      especificacoes: ['Variação 1: Anéis Garra', 'Varição 2: Anéis Lisos'],
      tamanhos: ['Y INICIAL 16MM 2 PONTAS COM ANÉIS GARRA', 'Y INICIAL 16MM 2 PONTAS COM ANÉIS LISO']
    },
    {
      id: 21,
      nome: "Y 16MM",
      imagem: "assets/img/y-16mm.webp",
      descricao: "Y 16mm Com Anéis",
      especificacoes: ["Variação 1: Anéis Lisos", "Variação 2: Anéis Lisos e Garra"],
      tamanhos: ['Y 16MM COM ANEL GARRA E 2 PONTAS COM ANÉIS LISO', 'Y 16MM COM ANÉIS GARRA NAS 3 PONTAS',
                  'Y 16MM COM ANÉIS LISO NAS 3 PONTAS']
    },
    {
      id: 22,
      nome: "T 16MM",
      imagem: "assets/img/t-16mm.webp",
      descricao: "Y 16mm Com Anéis",
      especificacoes: ["Variação 1: Anéis Lisos", "Variação 2: Anéis Lisos e Garra"],
      tamanhos: ['T 16MM COM ANÉIS LISO E GARRA', 'T 16MM COM ANÉIS GARRA',
                  'T 16MM COM ANÉIS LISO']
    },
    {
      id: 23,
      nome: "UNIÃO E TRANSIÇÃO 16MM",
      imagem: "assets/img/uniao-transicao-16mm.webp",
      descricao: "União/Transição 16mm Com Anéis",
      especificacoes: ["Variação 1: Anéis Lisos", "Variação 2: Anéis Lisos e Garra"],
      tamanhos: ['TRANSIÇÃO DE 16MM P/ 16MM COM ANÉIS LISO E GARRA', 'UNIÃO DE 16MM COM ANÉIS GARRA',
                  'UNIÃO DE 16MM COM ANÉIS LISO']
    },
    {
      id: 24,
      nome: "REGISTRO INICIAL 16MM",
      imagem: "assets/img/registro-inicial.webp",
      descricao: "Registro Inicial 16mm",
      especificacoes: ["Variação 1: Anéis Lisos", "Variação 2: Anéis Lisos e Garra"],
      tamanhos: ['REGISTRO INICIAL 16MM COM ANEL LISO', 'REGISTRO INICIAL 16MM COM ANEL GARRA']
    },
    {
      id: 25,
      nome: "REGISTRO UNIÃO 16MM",
      imagem: "assets/img/registro-uniao.webp",
      descricao: "Registro União 16mm",
      especificacoes: ["Variação 1: Anéis Garra", "Variação 2: Anéis Lisos", "Variação 3: Anéis Lisos e Garra"],
      tamanhos: ['REGISTRO UNIÃO 16MM COM ANÉIS GARRA', 'REGISTRO UNIÃO 16MM COM ANÉIS LISO', 'REGISTRO UNIÃO 16MM COM ANÉIS LISO E GARRA']
    },
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

  // Fechar modal ao clicar fora
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      fecharModal();
    }
  };

  return (
    <div className="catalogo-mangueiras">
      {/* Seção de Imagem/Banner */}
      <section className="catalogo-imagem">
        <img 
          src="assets/img/aspersor.png"
          alt="Irrigação"
          className="catalogo-imagem-bg"
        />
        <div className="overlay">
          <h2>
            Catálogo Mangueiras <span>e Conexões</span>
          </h2>
          <p>
            Explore nossa linha completa de mangueiras, <span>conexões e acessórios para irrigação</span>
          </p>
        </div>
      </section>

      {/* Seção de Catálogo */}
      <section className="catalogo">
        <div className="container">
          <h2>Nossos Produtos</h2>
          <div className="grid">
            {produtos.map((produto) => (
              <div key={produto.id} className="card">
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <button 
                  className="ver-mais-btn" 
                  onClick={() => abrirModal(produto)}
                >
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalAberto && produtoSelecionado && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-fechar" onClick={fecharModal}>×</button>
            
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
              {produtoSelecionado.especificacoes && (
                <div className="detalhe-secao">
                  <h3>Especificações</h3>
                  <div className="opcoes-lista">
                    {produtoSelecionado.especificacoes.map((spec, index) => (
                      <span key={index} className="opcao-badge">{spec}</span>
                    ))}
                  </div>
                </div>
              )}

              {produtoSelecionado.tamanhos && produtoSelecionado.tamanhos.length > 0 && (
                <div className="detalhe-secao">
                    <h3>Variações Disponíveis</h3>
                    <div className="tamanhos-lista">
                    {produtoSelecionado.tamanhos.map((tamanho, index) => (
                        <span key={index} className="tamanho-item">{tamanho}</span>
                    ))}
                    </div>
                </div>
                )}


              {produtoSelecionado.aplicacoes && (
                <div className="detalhe-secao">
                  <h3>Aplicações</h3>
                  <div className="aplicacoes-lista">
                    {produtoSelecionado.aplicacoes.map((app, index) => (
                      <span key={index} className="aplicacao-item">{app}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-secundario" onClick={fecharModal}>
                Fechar
              </button>
              <a 
                className="btn-contato" 
                href="https://wa.me/5587981543414?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20tubos%20e%20conexões." target="_blank">
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogoMangueiras;
