import Contact from "../Contact";
import './stylePortifolio.css';

import { Link } from "react-router-dom";

const PortfolioPage = (
  { 
  title, 
   heroImage, 
   previewImage1,
   previewImage2,
   prevProjectLink, 
   nextProjectLink,
   titlePrevProject,
   titleNextProject,
   
  }
   ) => {
  return (
    <div className="container">
      <div className="img">
        <img src={heroImage} alt="" />
      </div>

      <div className="conteudos">
        <div className="content-box">
        <div className="conteudo1">
          <h1>{title}</h1>
          <p>Esse projeto me fez criar uma landing page responsiva de acordo com o design que recebi. Usei HTML5, CSS
            Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <h5>Interaction Design / Front End Development</h5>
          <h5>HTML / CSS / JS</h5>
          <a href="#">VISITAR</a>
        </div>

        <div className="conteudo2">
          <h2>Projeto</h2>
          <p>Este projeto foi um desafio de front-end do Frontend Mentor. É uma plataforma que te faz praticar
            construindo websites a partir de um design e casos de usuário. Cada desafio contém designs mobile e desktop
            para ilustrar como o website seria em diferentes tamanhos de tela. Criar esses projetos me ajudou a refinar
            meu fluxo de trabalho e resolver problemas de código da vida real. Eu aprendi algo novo com cada projeto,
            me ajudando a melhorar e adaptar meu estilo.</p>
        </div>
        </div>
     
      </div>

      <div className="conteudo3">
        <h2>Previews Estáticos</h2>
        <img src={previewImage1} alt="" />
        <img src={previewImage2} ></img>
      </div>

      <div className="conteudo4">
        <div>
        <Link to={prevProjectLink}>
          <button className="button">   
            {titlePrevProject}
          </button>
          </Link>
          <h6>Projeto Anterior</h6>
        </div>

        <div>
        <Link to={nextProjectLink}>
          <button className="button buton2"> 
            {titleNextProject}
          </button>
          </Link>
          <h6>Próximo Projeto</h6>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default PortfolioPage;
