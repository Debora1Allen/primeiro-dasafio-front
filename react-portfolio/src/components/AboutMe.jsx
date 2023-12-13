import { Link } from 'react-router-dom';
import Profile from '../assets/home/image-homepage-profile.jpg';

const AboutMe = () => (
  <div className="container3">
<img src={Profile}  alt="" />
    <div id="sobremim" className="conteudo">
      <h2>Sobre mim</h2>
      <p>Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em escrever HTML
                    acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando estou escrevendo
                    código JavaScript, na maioria das vezes estou usando React, mas posso me adapta para qualquer
                    ferramenta
                    se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente e tenho
                    experiência
                    em times remotos. Quando não estou codando, poderá me achar fora de casa. Eu adoro estar próximo a
                    natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma olhada no meu
                    trabalho.</p>
      <Link to="/portifolio">Ir para PORTFOLIO</Link>
    </div>
  </div>
);

export default AboutMe;
