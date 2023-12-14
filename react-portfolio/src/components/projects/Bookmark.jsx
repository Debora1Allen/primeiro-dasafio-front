import PortfolioPage from "./PortifolioPage";
import bookmarkHero from '../../assets/portfolio/bookmark/image-bookmark-hero.jpg';
import bookmarkPreview1 from '../../assets/portfolio/bookmark/image-bookmark-preview-1.jpg';
import bookmarkPreview2 from '../../assets/portfolio/bookmark/image-bookmark-preview-2.jpg';


const Bookmark = () => {
    const projectInfo = {
      title: 'Bookmark',
      heroImage: bookmarkHero,
      previewImage1: [bookmarkPreview1],
      previewImage2: [bookmarkPreview2],
      prevProjectLink: '/manage-portifolio',
      nextProjectLink: '/insure-portifolio',
      titlePrevProject: 'Manage',
      titleNextProject: 'Insure'
    };
  
    return <PortfolioPage {...projectInfo} />;
  };
  
  export default Bookmark;