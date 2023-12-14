import PortfolioPage from './PortifolioPage';
import manageHero from '../../assets/portfolio/manage/image-manage-hero.jpg'
import managePreview1 from '../../assets/portfolio/manage/image-manage-preview-1.jpg';
import managePreview2 from '../../assets/portfolio/manage/image-manage-preview-2.jpg';

import React from 'react';

const Manage = () => {
  const projectInfo = {
    title: 'Manage',
    heroImage: manageHero,
    previewImage1: [managePreview1],
    previewImage2: [managePreview2],
    prevProjectLink: '/fylo-portifolio',
    nextProjectLink: '/bookmark-portifolio',
    titlePrevProject: 'Fylo',
    titleNextProject: 'Bookmark'
  };

  return <PortfolioPage {...projectInfo} />;
};

export default Manage;
