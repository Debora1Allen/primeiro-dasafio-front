import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

function Layout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
  
  export default Layout;
  