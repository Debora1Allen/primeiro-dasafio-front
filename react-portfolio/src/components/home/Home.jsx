import DownArrow from '../../assets/icons/down-arrows.svg';
import AboutMe from '../aboutMe/AboutMe';
import Contact from '../Contact';
import './style.css';
const Home = () => (
    <>
    <div className="container2">
        <div className='txt'> <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
    <a href="#sobremim"><img src={DownArrow} alt="" /> SOBRE MIM</a></div>
  </div>
  <AboutMe/>
  <Contact/>
    </>
  
);

export default Home;
