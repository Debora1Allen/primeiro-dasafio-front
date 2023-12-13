import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Layout from './components/Layout';
import Portfolio from './components/Portifolio';

const App = () => (
    <div className="container">
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/portifolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
);
export default App;

