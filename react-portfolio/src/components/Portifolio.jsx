import manage from '../assets/portfolio/manage/image-portfolio-manage.jpg';
import bookmark from '../assets/portfolio/bookmark/image-portfolio-bookmark.jpg';
import insure from '../assets/portfolio/insure/image-portfolio-insure.jpg';
import fylo from '../assets/portfolio/fylo/image-portfolio-fylo.jpg';

const Portfolio = () => {
  return (
    <div>
      <div className="container1">
        <img src={manage} alt="" />
        <div className="conteudo">
          <h1>Manage</h1>
          <p>Esse projeto me fez criar uma landing page responsiva de acordo com o design que recebi. Usei HTML5, CSS
            Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <a href="/pages/portfolio-01-manage/index.html">VER PROJETO</a>
        </div>
      </div>

      <div className="container1">
        <img src={bookmark}  alt="" />
        <div className="conteudo">
          <h1>Bookmark</h1>
          <p>Esse projeto me fez criar uma landing page responsiva de acordo com o design que recebi. Usei HTML5, CSS
            Grid e JavaScript para as áreas interativas, como a área de Features.</p>
          <a href="/pages/portfolio-02-bookmark/index.html">VER PROJETO</a>
        </div>
      </div>

      <div className="container1">
        <img src={insure}  alt="" />
        <div className="conteudo">
          <h1>Insure</h1>
          <p>Este foi um projeto pequeno que consistiu em HTML e CSS principalmente. Eu construí uma landing page
            totalmente responsiva. O único JavaScript que usei foi para o menu de navegação mobile.</p>
          <a href="/pages/portfolio-03-insure/index.html">VER PROJETO</a>
        </div>
      </div>

      <div className="container1">
        <img src={fylo}  alt="" />
        <div className="conteudo">
          <h1>Fylo</h1>
          <p>Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para construir, então ele foi
            totalmente responsivo. Eu tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid para
            criar o layout.</p>
          <a href="/pages/portfolio-04-fylo/index.html">VER PROJETO</a>
        </div>
      </div>

      <div className="container4">
        <h3>Interessado em fazer projetos comigo?</h3>
        <a href="/pages/contato/index.html">CONTATO</a>
      </div>
    </div>
  );
};

export default Portfolio;
