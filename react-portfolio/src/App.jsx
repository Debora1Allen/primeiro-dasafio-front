import {Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Contato from './components/contato/Contato';
import Layout from './components/Layout';
import Portfolio from './components/portifolio/Portifolio';
import Manage from './components/projects/Manage';
import Bookmark from './components/projects/Bookmark';
import Insure from './components/projects/Insure';
import Fylo from './components/projects/Fylo';


const App = () => (
    <div >
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/portifolio" element={<Portfolio />} />
        <Route path="/manage-portifolio" element={<Manage />} />
        <Route path='/bookmark-portifolio' element={<Bookmark/>} />
        <Route path='/insure-portifolio' element={<Insure/>} />
        <Route path='/fylo-portifolio' element={<Fylo/>} />
        </Route>
      </Routes>
    </div>
);
export default App;

