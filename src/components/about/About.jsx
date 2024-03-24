import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about" id="about">
      <div className='krishna'>
        <h5 className="h5">Get To Know</h5>
        <h2 className="h2">About Me</h2>
      </div>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            {/* <img src={} alt="about me image" />  i need to add my image here*/}
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>8 Completed </small>
            </article>
          </div>

          <p style={{ textAlign: "justify" }}>
          I'm Software/Web developer, I'm on a mission to revolutionize the digital landscape, making it more captivating and user-friendly. My journey began with a Bachelor's degree in Electronics and Communication Engineering from Malaviya National Institute of Technology Jaipur, a testament to my unwavering commitment to excellence.

My approach to work is a fusion of creativity and functionality. I thrive on crafting visually stunning and highly responsive websites that not only dazzle the eye but also deliver exceptional performance. I am deeply committed to keeping pace with the latest industry trends, ensuring that each project I undertake meets and exceeds the highest standards.

Let's join forces and breathe life into your digital vision together.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
