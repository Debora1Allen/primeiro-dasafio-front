import { Link } from 'react-router-dom';
import logoLigth from '../assets/icons/logo-light.svg';
import githubLight from '../assets/icons/github-light.svg';
import twitterLight from '../assets/icons/twitter-light.svg';
import linkedinLight from '../assets/icons/linkedin-light.svg';

const Footer = () => (
  <footer>
    <img src={logoLigth} alt="" />
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/portfolio">PORTFOLIO</Link></li>
      <li><Link to="/contato">CONTATO</Link></li>
      <img src={githubLight} alt="" />
    <img src={twitterLight} alt="" />
    <img src={linkedinLight} alt="" />
    </ul>
  
  </footer>
);

export default Footer;
