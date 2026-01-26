import './Contato.css';

const Contato = () => {
  return (
    <div className="contato">
      {/* Título da Página */}
      <section className="titulo-contato">
        <h1>Fale Conosco</h1>
        <p>Estamos prontos para atender você. Confira nossas informações de contato abaixo.</p>
      </section>

      {/* Informações de Contato */}
      <section className="info-contato">
        <div className="container">
          {/* Card: Informações Gerais */}
          <div className="info-box">
            <h2>Informações de Contato</h2>
            <div className="info-item">
              <h3>📞 Telefone</h3>
              <p>
                <a href="tel:+5587981543414">(87) 9 8154-3414</a>
              </p>
            </div>
            <div className="info-item">
              <h3>📧 E-mail</h3>
              <p>
                <a href="mailto:vendas@valletubo.com.br">vendas@valletubo.com.br</a>
              </p>
            </div>
            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>Fazenda Mandacaru, S/N Distrito de Ibó, Abaré - BA</p>
            </div>
          </div>

          {/* Cards Sociais */}
          <div className="social-column">
            {/* Card: WhatsApp */}
            <div className="whatsapp-box">
              <a 
                href="https://wa.me/5587981543414" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/assets/img/wpp-img.png" 
                  alt="WhatsApp" 
                />
              </a>
              <h3>WhatsApp</h3>
              <p>Clique no ícone para falar conosco!</p>
            </div>

            {/* Card: Instagram */}
            <div className="instagram-box">
              <a 
                href="https://www.instagram.com/valletubo/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/assets/img/insta-logo.png" 
                  alt="Instagram" 
                />
              </a>
              <h3>Instagram</h3>
              <p>Siga-nos no Instagram!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
