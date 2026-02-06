import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import CatalogoMangueiras from './pages/CatalogoMangueiras';
import CatalogoIrrigacao from './pages/CatalogoIrrigacao';
import ProdutosLancamento from './pages/ProdutosLancamento';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/catalogoMangueiras" element={<CatalogoMangueiras />} />
        <Route path="/catalogoIrrigacao" element={<CatalogoIrrigacao />} />
        <Route path="/produtosLancamento" element={<ProdutosLancamento />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
