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
            I'm a dedicated frontend developer with a passion for transforming
            the web into a more beautiful and user-friendly digital place. My
            journey started with a Bachelor's degree in Biochemistry, where I
            graduated with first-class honors, a testament to my commitment to
            excellence. My work is a blend of creativity and functionality. I
            thrive on crafting elegant, responsive websites that not only look
            great but also deliver exceptional performance. I'm committed to
            staying up-to-date with the latest industry trends to ensure each
            project meets the highest standards. Let's collaborate and bring
            your digital vision to life.
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
