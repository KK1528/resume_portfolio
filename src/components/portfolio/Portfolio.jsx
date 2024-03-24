import './portfolio.css';
import snake from '../../assets/bg.jpg';

const data = [
  {
    id: 1,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  {
    id: 2,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  {
    id: 3,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  {
    id: 4,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  {
    id: 5,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <div className='krishna'>
        <h5 className='h5'>My Recent Work</h5>
        <h2 className='h2'>Projects</h2>
      </div>

      <div className='item'>
        {data.map(({id, title, image, github, demo, body}) => {
          return (
            <div key={id}>
              <article className="portfolio-item">
                <div className="portfolio-item-image">
                  <img src={image} alt="blog-project" />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="portfolio-item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Portfolio;
