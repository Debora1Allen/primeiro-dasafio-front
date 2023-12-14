import {Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Contato from './components/contato/Contato';
import Layout from './components/Layout';
import Portfolio from './components/portifolio/Portifolio';
import PortfolioPage from './components/projects/PortifolioPage';


const App = () => (
    <div >
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/portifolio" element={<Portfolio />} />
        <Route path="/page-portifolio" element={<PortfolioPage />} />
        </Route>
      </Routes>
    </div>
);
export default App;

