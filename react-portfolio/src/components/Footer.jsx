import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <img src="/assets/icons/logo-light.svg" alt="" />
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/portfolio">PORTFOLIO</Link></li>
      <li><Link to="/contato">CONTATO</Link></li>
    </ul>
    <img src="/assets/icons/github-light.svg" alt="" />
    <img src="/assets/icons/twitter-light.svg" alt="" />
    <img src="/assets/icons/linkedin-light.svg" alt="" />
  </footer>
);

export default Footer;
