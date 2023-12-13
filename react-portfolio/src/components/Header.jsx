import { Link } from 'react-router-dom';
import logoDark from '../assets/icons/logo-dark.svg';

const Header = () => (
  <header>
    <img src={logoDark} alt="" />
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/portifolio">PORTFOLIO</Link></li>
        <li><Link to="/contato">CONTATO</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
