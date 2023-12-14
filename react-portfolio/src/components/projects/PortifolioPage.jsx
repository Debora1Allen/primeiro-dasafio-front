import Contact from "../Contact";
import manageHero from '../../assets/portfolio/manage/image-manage-hero.jpg';
import managePreview1 from '../../assets/portfolio/manage/image-manage-preview-1.jpg';
import managePreview2 from '../../assets/portfolio/manage/image-manage-preview-2.jpg';
import './stylePortifolio.css';

const PortfolioPage = () => {
  return (
    <div className="container">
      <div className="img">
        <img src={manageHero} alt="" />
      </div>

      <div className="conteudos">
        <div className="content-box">
        <div className="conteudo1">
          <h1>Manage</h1>
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
        <img src={managePreview1} alt="" />
        <img src={managePreview2} alt="" />
      </div>

      <div className="conteudo4">
        <div>
          <a className="button" href="/pages/portfolio-04-fylo/index.html">
            <img src="/assets/icons/arrow-left.svg" alt="" />
            <h2>Fylo </h2>
          </a>
          <h6>Projeto Anterior</h6>
        </div>

        <div>
          <a className="button buton2" href="/pages/portfolio-02-bookmark/index.html">
            <h2>Bookmark</h2>
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </a>
          <h6>Próximo Projeto</h6>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default PortfolioPage;
