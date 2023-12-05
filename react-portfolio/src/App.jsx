import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Contato from './components/Contato';
import Layout from './components/Layout';

const App = () => (
    <div className="container">
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </div>
);
export default App;

