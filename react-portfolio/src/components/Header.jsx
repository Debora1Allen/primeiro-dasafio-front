import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <img src="/assets/icons/logo-dark.svg" alt="" />
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contato">CONTATO</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
