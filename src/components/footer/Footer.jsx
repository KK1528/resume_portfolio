import './footer.css';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <div>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </div>

      <div>
        <div className="footer-socials">
          <a href="http://instagram.com/_kkrishna007"> <FiInstagram /> </a>
          <a href="https://twitter.com/krishna01_twt"><IoLogoTwitter /></a>
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
