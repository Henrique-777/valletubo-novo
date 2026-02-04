import React from 'react';
import { Link } from 'react-router-dom';
import './Produtos.css';

const Produtos = () => {
  return (
    <>
      {/* Seção cabeçalho com imagem */}
      <section className="catalogo-imagem">
        <div className="overlay">
          <h2>CONHEÇA NOSSAS LINHAS DE PRODUTOS</h2>
          <p>Descubra nossas soluções completas para sistemas de irrigação de alta eficiência e durabilidade.</p>
        </div>
      </section>

      <section className="produtos">
        <div className="container">
          <div className="grid">
            <div className="card">
              <img src="assets/img/mangueira-polietileno-1.png" alt="Produto 2" />
              <h3>Mangueiras e Conexões</h3>
              <p>Durabilidade e resistência para qualquer aplicação.</p>
              <Link to="/CatalogoMangueiras" className="btn">Saiba mais</Link>
            </div>
            <div className="card">
              <img src="assets/img/joelho-32.png" alt="Produto 3" />
              <h3>Irrigação</h3>
              <p>Ideais para sistemas de irrigação e abastecimento.</p>
              <Link to="/CatalogoIrrigacao" className="btn">Saiba mais</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Produtos;
