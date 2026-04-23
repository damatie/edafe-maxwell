import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';

const Layout = ({ children }) => {
  return (
    <>
      <a href="#main" className="skipLink">
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
