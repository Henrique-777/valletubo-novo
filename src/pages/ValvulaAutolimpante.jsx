import React, { useEffect, useRef, useState } from 'react';
import './ValvulaAutolimpante.css';

const ValvulaAutolimpante = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    // Integrar com sistema de contato ou WhatsApp
    console.log('Contato comercial solicitado');
  };

  return (
    <div className="valvula-autolimpante-page">
      {/* Hero Section */}
      <section 
        className={`hero-section-va ${visibleSections.hero ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.hero = el)}
        data-section="hero"
      >
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">Produto Exclusivo</div>
            <h1 className="hero-title">
              Válvula Autolimpante: mais eficiência e menos manutenção na irrigação
            </h1>
            <p className="hero-subtitle">
              Solução única no mercado que elimina automaticamente resíduos acumulados 
              na linha de irrigação, garantindo operação contínua e livre de entupimentos 
              em sistemas de microaspersão e gotejamento.
            </p>
            <button className="cta-button primary" onClick={handleCTAClick}>
              Fale com o comercial
            </button>
          </div>
          <div className="hero-image-wrapper">
            <div className="product-image-placeholder">
              {/* Substituir por imagem real do produto */}
              <svg className="product-icon" viewBox="0 0 200 200" fill="none">
                <rect x="60" y="30" width="80" height="140" rx="8" fill="#2563eb" opacity="0.1"/>
                <circle cx="100" cy="100" r="35" stroke="#2563eb" strokeWidth="4"/>
                <path d="M100 70 L100 130 M75 100 L125 100" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/>
                <rect x="70" y="150" width="60" height="8" fill="#2563eb"/>
                <rect x="70" y="42" width="60" height="8" fill="#2563eb"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionamento Section */}
      <section 
        className={`funcionamento-section ${visibleSections.funcionamento ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.funcionamento = el)}
        data-section="funcionamento"
      >
        <div className="section-container">
          <h2 className="section-title">Como funciona</h2>
          <p className="section-intro">
            A Válvula Autolimpante opera de forma totalmente automática, 
            acionando-se no momento da pressurização do sistema.
          </p>
          
          <div className="funcionamento-grid">
            <div className="funcionamento-card">
              <div className="card-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 10 L30 30 L45 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Acionamento automático</h3>
              <p>
                No momento em que o sistema de irrigação é ligado, a válvula detecta 
                o aumento de pressão e inicia o processo de limpeza automaticamente.
              </p>
            </div>

            <div className="funcionamento-card delay-1">
              <div className="card-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M10 30 Q15 15, 30 15 T50 30" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 35 Q15 45, 30 45 T50 35" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="15" cy="30" r="2" fill="currentColor"/>
                  <circle cx="25" cy="35" r="2" fill="currentColor"/>
                  <circle cx="35" cy="32" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Expulsão de resíduos</h3>
              <p>
                Durante os primeiros instantes do acionamento, a válvula abre um canal 
                específico que expulsa partículas, sedimentos e detritos acumulados na tubulação.
              </p>
            </div>

            <div className="funcionamento-card delay-2">
              <div className="card-icon">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M15 25 L45 25 M15 30 L45 30 M15 35 L45 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="50" cy="30" r="3" fill="#10b981"/>
                </svg>
              </div>
              <h3>Operação estável</h3>
              <p>
                Após a limpeza inicial, a válvula fecha automaticamente, garantindo 
                que o sistema opere com fluxo constante e distribuição uniforme de água.
              </p>
            </div>
          </div>

          <div className="funcionamento-highlight">
            <p>
              <strong>Resultado:</strong> Linha limpa, sistema eficiente e redução drástica 
              de intervenções manuais de manutenção.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section 
        className={`beneficios-section ${visibleSections.beneficios ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.beneficios = el)}
        data-section="beneficios"
      >
        <div className="section-container">
          <h2 className="section-title">Benefícios operacionais</h2>
          
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <div className="beneficio-icon">
                <svg viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M25 15 L25 25 L35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M40 10 L45 5 M45 10 L40 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Limpeza automática da linha</h3>
              <p>Eliminação de resíduos sem intervenção manual a cada acionamento do sistema.</p>
            </div>

            <div className="beneficio-item delay-1">
              <div className="beneficio-icon">
                <svg viewBox="0 0 50 50" fill="none">
                  <path d="M10 40 L25 15 L40 40" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M15 35 L25 20 L35 35" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="25" cy="25" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h3>Redução significativa de entupimentos</h3>
              <p>Prevenção ativa de obstruções em emissores, gotejadores e microaspersores.</p>
            </div>

            <div className="beneficio-item delay-2">
              <div className="beneficio-icon">
                <svg viewBox="0 0 50 50" fill="none">
                  <rect x="15" y="10" width="20" height="30" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 18 L30 18 M20 23 L30 23 M20 28 L30 28 M20 33 L30 33" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3>Operação estável do sistema</h3>
              <p>Fluxo uniforme e pressão constante durante todo o ciclo de irrigação.</p>
            </div>

            <div className="beneficio-item delay-3">
              <div className="beneficio-icon">
                <svg viewBox="0 0 50 50" fill="none">
                  <path d="M25 5 L28 18 L41 18 L30 26 L34 39 L25 31 L16 39 L20 26 L9 18 L22 18 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Menor necessidade de manutenção</h3>
              <p>Redução de paradas não programadas e custos com serviços corretivos.</p>
            </div>

            <div className="beneficio-item delay-4">
              <div className="beneficio-icon">
                <svg viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M25 10 L25 25 M15 20 L25 25 L35 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Maior vida útil do sistema</h3>
              <p>Proteção contínua aumenta a durabilidade de tubulações, conexões e emissores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusividade Section */}
      <section 
        className={`exclusividade-section ${visibleSections.exclusividade ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.exclusividade = el)}
        data-section="exclusividade"
      >
        <div className="section-container">
          <div className="exclusividade-content">
            <div className="exclusividade-badge">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M30 5 L35 20 L50 22 L40 32 L43 47 L30 39 L17 47 L20 32 L10 22 L25 20 Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="exclusividade-title">Produto de fabricação exclusiva</h2>
            <p className="exclusividade-text">
              A Válvula Autolimpante é desenvolvida e fabricada exclusivamente pela nossa indústria, 
              resultado de anos de pesquisa aplicada e engenharia especializada em sistemas de irrigação. 
              Controle total do processo produtivo garante padrões rigorosos de qualidade, 
              rastreabilidade completa e suporte técnico especializado.
            </p>
            <div className="exclusividade-features">
              <div className="feature-tag">Engenharia nacional</div>
              <div className="feature-tag">Controle de qualidade total</div>
              <div className="feature-tag">Suporte técnico especializado</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section 
        className={`cta-final-section ${visibleSections.ctaFinal ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.ctaFinal = el)}
        data-section="ctaFinal"
      >
        <div className="cta-final-container">
          <h2 className="cta-final-title">Solicite mais informações técnicas</h2>
          <p className="cta-final-text">
            Entre em contato com nossa equipe comercial para receber especificações completas, 
            orientações de instalação e condições para revenda.
          </p>
          <button className="cta-button secondary" onClick={handleCTAClick}>
            Falar com especialista
          </button>
        </div>
      </section>
    </div>
  );
};

export default ValvulaAutolimpante;
