import PortfolioPage from "./PortifolioPage";
import insureHero from '../../assets/portfolio/insure/image-insure-hero.jpg';
import insurePreview1 from '../../assets/portfolio/insure/image-insure-preview-1.jpg';
import insurePreview2 from '../../assets/portfolio/insure/image-insure-preview-2.jpg';


const Insure = () => {
    const projectInfo = {
      title: 'Insure',
      heroImage: insureHero,
      previewImage1: [insurePreview1],
      previewImage2: [insurePreview2],
      prevProjectLink: '/bookmark-portifolio',
      nextProjectLink: '/fylo-portifolio',
      titlePrevProject: 'Bookmark',
      titleNextProject: 'Fylo'
    };
  
    return <PortfolioPage {...projectInfo} />;
  };
  
  export default Insure;