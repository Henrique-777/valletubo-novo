import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo">
            <img src="/assets/img/logo-vt.svg" alt="Logo" />
          </Link>
          <ul className="navbar-menu">
            <li><Link to="/">INÍCIO</Link></li>
            <li><Link to="/Sobre">SOBRE</Link></li>
            <li><Link to="/Contato">CONTATO</Link></li>
            <li className="navbar-dropdown">
              <Link to="/Produtos">
                PRODUTOS
                <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/CatalogoMangueiras">MANGUEIRAS E
                CONEXÕES</Link></li>
                <li><Link to="CatalogoIrrigacao">IRRIGAÇÃO - LINHA AZUL</Link></li>
              </ul>
            </li>
        </ul>
        </div>
        

      </div>
    </nav>
  );
};

export default Navbar;
