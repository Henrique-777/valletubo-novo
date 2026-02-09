import { useState } from 'react';
import './CatalogoIrrigacao.css';

const CatalogoIrrigacao = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // Array com todos os produtos do catálogo
  const produtos = [
    {
      id: 1,
      nome: "TUBO PVC RÍGIDO",
      imagem: "assets/img/tubo-pvc.webp",
      descricao: "Tubo de PVC com espessura tamanhos diversos.",
      tamanhos: ["TUBO PVC RÍGIDO PN40 - 35MM", "TUBO PVC RÍGIDO PN40 - 50MM", "TUBO PVC RÍGIDO PN40 - 75MM", "TUBO PVC RÍGIDO PN40 - 100MM",
                  "TUBO PVC RÍGIDO PN60 20MM C/ 6M", "TUBO PVC RÍGIDO PN60 25MM C/ 6M", "TUBO PVC RÍGIDO PN60 32MM C/ 6M", "TUBO PVC RÍGIDO PN80 - 50MM",
                  "TUBO PVC RÍGIDO PN80 - 75MM", "TUBO PVC RÍGIDO PN80 - 100MM"],
      especificacoes: ["Material: PVC"],
      aplicacoes: ["Irrigação", "Sistemas agrícolas", "Hortas"]
    },
    {
      id: 2,
      nome: "TUBO PVC RÍGIDO - ROSCÁVEL",
      imagem: "assets/img/tubo-pvc-roscavel.webp",
      descricao: "Tubo de PVC roscável com espessura e tamanhos diversos.",
      tamanhos: ['TUBO AZUL PVC ROSCÁVEL 2" C/ 6M', 'TUBO AZUL PVC ROSCÁVEL 1.1/2" C/ 6M', 
                  'TUBO AZUL PVC ROSCÁVEL 1.1/4" C/ 6M', 'TUBO AZUL PVC ROSCÁVEL 1" C/ 6M'],
      especificacoes: ["Material: PVC"],
      aplicacoes: ["Irrigação", "Sistemas agrícolas", "Hortas"]
    },
    {
      id: 3,
      nome: "CURVA 90º IRRI - 1 LADO PONTA E BOLSA",
      imagem: "assets/img/curva-ponta-e-bolsa.webp",
      especificacoes: ['Material: PVC'],
      descricao: "Curva de PVC.",
      tamanhos: ['CURVA 90º IRRI DN 50MM - 1 LADO PONTA E BOLSA', 'CURVA 90º IRRI DN 75MM - 1 LADO PONTA E BOLSA'],
      aplicacoes: ["Irrigação"]
    },
    {
      id: 4,
      nome: "REGISTRO DE ESFERA ROSCA INTERNA",
      imagem: "assets/img/registro-pvc-rosca-interna.webp",
      especificacoes: ['Material: PVC'],
      descricao: ['Registro esfera de PVC com rosca interna.'],
      tamanhos: ['REG. DE ESFERA ROSCA INTERNA PVC AZUL 1"']
    },
    {
      id: 5,
      nome: "REGISTRO DE ESFERA ROSCA EXTERNA",
      imagem: "assets/img/registro-esfera-rosca-externa.webp",
      descricao: ["Registro esfera de PVC com rosca externa."],
      especificacoes: ['Material: PVC'],
      tamanhos: ['REG. DE ESFERA ROSCA EXTERNA PVC AZUL 3/4"', 'REG. DE ESFERA ROSCA EXTERNA PVC AZUL 1"'],
    },
    {
      id: 6,
      nome: "REGISTRO DE ESFERA ROSCA INTERNA/EXTERNA",
      imagem: 'assets/img/registro-esfera-rosca-externa_interna.webp',
      descricao: ["Registro esfera de PVC com rosca interna e externa."],
      especificacoes: ['Material: PVC'],
      tamanhos: ['REG. DE ESFERA PVC AZUL ROSCA INT./EXT. 3/4"'],
    },
    {
      id: 7,
      nome: "JOELHO 90º - SOLDÁVEL",
      imagem: "assets/img/joelho-pvc-50mm.webp",
      especificacoes: ['Material: PVC'],  
      tamanhos: ['JOELHO 90º SOLDÁVEL - DN 20MM', 'JOELHO 90º SOLDÁVEL - DN 25MM',
                 'JOELHO 90º SOLDÁVEL - DN 32MM', 'JOELHO 90º SOLDÁVEL - DN 50MM']
    },
    {
      id: 8,
      nome: "JOELHO 90º - REDUÇÃO SOLDÁVEL",
      imagem: "assets/img/joelho-pvc-reducao-soldavel.webp",
      especificacoes: ['Material: PVC'],
      tamanhos: ['JOELHO 90º REDUÇÃO SOLDÁVEL - DN 25-20MM']
    },
    {
      id: 9,
      nome: "TEE 90º - SOLDÁVEL",
      imagem: "assets/img/tee-32.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['TEE SOLDÁVEL - DN 20MM', 'TEE SOLDÁVEL - DN 25MM', 'TEE SOLDÁVEL - DN 32MM',
                 'TEE SOLDÁVEL - DN 35MM', 'TEE SOLDÁVEL - DN 50MM'
      ],
    },
    {
      id: 10,
      nome: "TEE 90º - REDUÇÃO SOLDÁVEL",
      imagem: "assets/img/tee-pvc-reducao-soldavel.webp",
      especificacoes: ['Material: PVC'],
      tamanhos: ['TEE REDUÇÃO SOLDÁVEL - DN 25X20MM', 'TEE REDUÇÃO SOLDÁVEL - DN 32X25MM',
                 'TEE REDUÇÃO SOLDÁVEL - DN 50X25MM'
      ],
    },
    {
      id: 11,
      nome: "NÍPEL ROSCÁVEL",
      especificacoes: ['Material: PVC'],
      imagem: "assets/img/nipel-roscavel-3.4.png",
      tamanhos: ['NÍPEL ROSCÁVEL 1/2', 'NÍPEL ROSCÁVEL 3/4']
    },
    {
      id: 12,
      nome: "LUVA DE REDUÇÃO SOLDÁVEL",
      imagem: 'assets/img/luva-reducao-soldavel.png',
      especificacoes: ['Material: PVC'],
      tamanhos: ['LUVA DE REDUÇÃO - DN 25X20MM']
    },
    {
      id: 13,
      nome: "PLUG ROSCÁVEL",
      imagem: "assets/img/plug-roscavel-1.2.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['PLUG ROSCÁVEL 1/2"', 'PLUG ROSCÁVEL 3/4"']
    },
    {
      id: 14,
      nome: "LUVA IRRIGA SOLDÁVEL",
      imagem: "assets/img/luva-irriga-soldavel-dn-50mm.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['LUVA SOLDÁVEL DN 20MM', 'LUVA SOLDÁVEL DN 25MM',
                 'LUVA SOLDÁVEL DN 32MM', 'LUVA SOLDÁVEL DN 35MM',
                 'LUVA SOLDÁVEL DN 50MM']
    },
    {
      id: 15,
      nome: "LUVA LR",
      imagem: "assets/img/luva-lr-50x1.1-2.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['LUVA LR 50x1.1/2']
    },
    {
      id: 16,
      nome: "BUCHA DE REDUÇÃO ROSCÁVEL",
      imagem: "assets/img/bucha-reducao-roscavel.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['BUCHA DE REDUÇÃO ROSCÁVEL 3/4x1/2"'
      ]
    },
    {
      id: 17,
      nome: "ADAPTADOR SOLDÁVEL LR",
      imagem: "assets/img/adaptador-soldavel-lr.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['ADAPTADOR SOLDÁVEL LR 25X3/4"', 'ADAPTADOR SOLDÁVEL LR 32X1"',
                 'ADAPTADOR SOLDÁVEL LR 20X1/2""', 'ADAPTADOR SOLDÁVEL LR 50X1 1/2"'
      ]
    },
    {
      id: 18,
      nome: "CAP",
      imagem: "assets/img/cap-25mm.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['CAP - 20MM', 'CAP - 25MM']
    },
    {
      id: 19,
      nome: "JOELHO 45º SOLDÁVEL",
      imagem: "assets/img/joelho-45.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['JOELHO 45º - DN 35MM', 'JOELHO 45º - DN 50MM']
    },
    {
      id: 20,
      nome: "CURVA 90º - IRRI",
      imagem: "assets/img/curva-irri.webp",
      especificacoes: ['Material: PVC'],
      tamanhos: ['CURVA 90º - DN 50MM']
    },
    {
      id: 21,
      nome: "REGISTRO DE ESFERA PVC SOLDÁVEL",
      imagem: "assets/img/registro-pvc-rosca-interna.webp",
      especificacoes: ['Material: PVC'],
      tamanhos: ['REG. DE ESFERA SOLDA PVC AZUL 25 MM', 'REG. DE ESFERA SOLDA PVC AZUL 32 MM',
                 'REG. DE ESFERA SOLDA PVC AZUL 35 MM', 'REG. DE ESFERA SOLDA PVC AZUL 50.6 MM',
                 'REG. DE ESFERA SOLDA PVC AZUL 75.4 MM'
      ]
    },
    {
      id: 22,
      nome: "REGISTRO DE ESFERA PVC - UNIÃO DENTADA",
      imagem: "assets/img/registro-uniao-dentada-3.4.png",
      especificacoes: ['Material: PVC'],
      tamanhos: ['REG. DE ESFERA PVC AZUL UNIÃO DENTADA 1”', 'REG. DE ESFERA PVC AZUL UNIÃO DENTADA ½”',
                 'REG. DE ESFERA PVC AZUL UNIÃO DENTADA 3/4”']
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
          src="assets/img/tubos.webp"
          alt="Irrigação"
          className="catalogo-imagem-bg"
        />
        <div className="overlay">
          <h2>Catálogo Irrigação</h2>
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

export default CatalogoIrrigacao;
