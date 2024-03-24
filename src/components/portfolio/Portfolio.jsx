import './portfolio.css';
import snake from '../../assets/bg.jpg'

// https://www.rapidmed.care/

const data = [
  {
    id: 1,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <div>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>

        <div>
          {
            data.map(({id, title, image, github, demo, body}) => {
              return (
                  <div key={id}>
                    <article className="portfolio-item">
                      <div className="portfolio-item-image">
                        <img src={image} alt="blog-project" />
                      </div>
                      <h3>{title}</h3>
                      <p style={{height: '7rem'}}>{body}</p>
                      <div className="portfolio-item-cta">
                        <a href={github} className='btn'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
                      </div>
                    </article>
                </div>
              )
            })
          }
        </div>

    </section>
  );
}

export default Portfolio;
