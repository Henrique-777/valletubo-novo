import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
