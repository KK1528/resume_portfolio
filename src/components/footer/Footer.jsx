import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="permalinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </div>

      <div>
        <div className="footer-socials">
          <a href="http://instagram.com/_kkrishna007" rel="noreferrer"> <FiInstagram /> </a>
          <a href="https://twitter.com/krishna01_twt" rel="noreferrer"><IoLogoTwitter /></a>
        </div>
      </div>

      <div>
        <div className="footer-copyright">
          <small>&copy; Krishna Karodiwal</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
