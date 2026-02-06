import { Link } from 'react-router-dom';
import { HiChevronDoubleUp } from "react-icons/hi";
import './Footer.css';
import { useEffect, useState } from 'react';


const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    onScroll;

    return () => window.removeEventListener('scroll', onScroll);
    
    
  }, []);

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  const closeModal = () => {
    setShowPrivacyModal(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-logo-section">
            <img src="assets/img/logo-vt-branca.svg" alt="Valle Tubo Logo" className="footer-logo" />
            <p>Oferecemos soluções inovadoras e de alta qualidade para sistemas de irrigação, contribuindo para a eficiência e sustentabilidade do agronegócio.</p>
          </div>

          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/CatalogoMangueiras">Mangueiras e Conexões</Link></li>
              <li><Link to="/CatalogoIrrigacao">Irrigação</Link></li>
              <li><Link to="/ProdutosLancamento">Novidades</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Fale conosco</h4>
            <ul className="footer-list">
              <li><a href="tel:5587981543414" className="footer-contact">(87) 9 8154-3414</a></li>
              <li><a href="/contato.html" className="footer-contact">Contato</a></li>
              <li>
                <a href="https://www.instagram.com/valletubo" className="footer-contact" target="_blank" rel="noopener noreferrer">
                  @valletubo
                </a>
              </li>
            </ul>
            <div className="footer-icons">
              <a className="footer-contact" href="https://www.instagram.com/valletubo" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="footer-contact" href="https://wa.me/5587981543414?text=Olá%2C%20gostaria%20de%20saber%20mais%20informações%20sobre%20tubos%20e%20conexões." target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="footer-contact" href="mailto:vendas@valletubo.com.br">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a className="footer-contact" href="tel:5587981543414">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-link">
            <a href="/privacidade" onClick={handlePrivacyClick}>Aviso de privacidade</a>
          </p>
          <p className="footer-rights">© 2026 Valletubo. Todos os direitos reservados.</p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <HiChevronDoubleUp size={30}/>
        </button>
      )}

      {/* Modal de Privacidade */}
      {showPrivacyModal && (
        <div className="privacy-modal-overlay" onClick={closeModal}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <div className="privacy-icon">
              <i className="fa-solid fa-info"></i>
            </div>
            <h2 className="privacy-title">Aviso de privacidade.</h2>
            <p className="privacy-text">
              Este site utiliza cookies para garantir que você tenha uma melhor experiência.
            </p>
            <button className="privacy-button" onClick={closeModal}>
              Entendi!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
