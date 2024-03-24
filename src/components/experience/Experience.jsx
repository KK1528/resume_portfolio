import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section  id='experience'>
      <div className='cont'>
        <h5>What Skills I Have</h5>
        <h2 style={{textAlign: 'center'}}>My Skills</h2>
      </div>

      <div className="container experience-container">

          <div className="experience-frontend">
            <h3>Web Development</h3>
            <div className="experience-content">
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Styled-component</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Reactjs</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Redux</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Git/GitHub</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Express.js</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Materail-UI</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>SCSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

            </div>
          </div>

        <>
          <div className="experience-backend">

            <h3>Software Skills</h3>
            <div className="experience-content">
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>C</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>C++</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Data Structures and Algorithms</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>OOPS</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>Operating system</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>
              
              <article className='experience-details'>
                <BsPatchCheckFill className='experience-detail-icon' />
                <div>
                  <h4>VS Code</h4>
                  <small className="text-light">Basics</small>
                </div>
              </article>

            </div>
          </div>
        </>

      </div>
    </section>
  );
}

export default Experience;
