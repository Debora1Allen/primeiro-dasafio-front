import { Link } from 'react-router-dom';
import Profile from '../assets/home/image-homepage-profile.jpg';

const AboutMe = () => (
  <div className="container3">
<img src={Profile}  alt="" />
    <div id="sobremim" className="conteudo">
      <h2>Sobre mim</h2>
      <p>
        Sou um desenvolvedor front-end júnior procurando por uma oportunidade...
      </p>
      <Link to="/portfolio">Ir para PORTFOLIO</Link>
    </div>
  </div>
);

export default AboutMe;
