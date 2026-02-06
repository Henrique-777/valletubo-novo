import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img src="assets/img/logo-vt.svg" alt="Logo" />
          </Link>
        </div>

        {/* Botão Hambúrguer */}
        <div className="hamburguer-menu" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>INÍCIO</Link>
          </li>
          <li>
            <Link to="/sobre" onClick={() => setMenuOpen(false)}>SOBRE</Link>
          </li>
          <li>
            <Link to="/contato" onClick={() => setMenuOpen(false)}>CONTATO</Link>
          </li>
          <li>
            <Link to="/ProdutosLancamento" onClick={() => setMenuOpen(false)}>NOVIDADES</Link>
          </li>
          <li className={`navbar-dropdown ${dropdownOpen ? 'open' : ''}`}>
            <span onClick={toggleDropdown}>
              PRODUTOS <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/CatalogoMangueiras" onClick={() => setMenuOpen(false)}>
                  MANGUEIRAS E CONEXÕES
                </Link>
              </li>
              <li>
                <Link to="/CatalogoIrrigacao" onClick={() => setMenuOpen(false)}>
                  IRRIGAÇÃO - LINHA AZUL
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
