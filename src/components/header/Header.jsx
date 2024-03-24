import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import resume from '../../assets/resume.pdf'
import svg from '../../assets/software-engineer.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h2>Hello I'm</h2>
        <h1>Krishna Karodiwal</h1>
        <h3 className="text-light">Web Developer</h3>

        <div className="cta">
          <a className="btn-primary btn" href={resume}>Resume</a>
        </div>

        <div className="header-socials">
          <a href="https://leetcode.com/krishna1528/" target="_blank">
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-karodiwal-00203b224/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/kk1528" target="_blank">
            <FaGithub />
          </a>
          <a href="#" target="_blank">
            <FiDribbble />
          </a>
        </div>

        <div className="me">
          <img src={svg} alt="" />
        </div>

        <Link to="/contact" className="scroll-down">
          <span className="Krishna">Contact Me</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
