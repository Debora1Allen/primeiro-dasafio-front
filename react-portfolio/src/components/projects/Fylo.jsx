import PortfolioPage from "./PortifolioPage";
import fyloHero from '../../assets/portfolio/fylo/image-fylo-hero.jpg';
import fyloPreview1 from '../../assets/portfolio/fylo/image-fylo-preview-1.jpg';
import fyloPreview2 from '../../assets/portfolio/fylo/image-fylo-preview-2.jpg';


const Fylo = () => {
    const projectInfo = {
      title: 'Fylo',
      heroImage: fyloHero,
      previewImage1: [fyloPreview1],
      previewImage2: [fyloPreview2],
      prevProjectLink: '/insure-portifolio',
      nextProjectLink: '/manage-portifolio',
      titlePrevProject: 'Insure',
      titleNextProject: 'Manage'
    };
  
    return <PortfolioPage {...projectInfo} />;
  };
  
  export default Fylo;