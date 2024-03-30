import './portfolio.css';
import snake from '../../assets/bg.jpg';
import Food_Recipe from '../../assets/food.jpg';
import Notepad from '../../assets/notepad.jpg';
import saalve from '../../assets/saalve.png';

const data = [
  {
    id: 7,
    image: saalve,
    title: 'Saalve',
    body: 'Your go-to destination for delicious homemade meals delivered right to your doorstep.',
    github: 'https://github.com/KK1528/saalve',
    demo: 'https://saalve-seven.vercel.app/',
  },
  {
    id: 8,
    image: Food_Recipe ,
    title: 'Food Recipe Search',
    body:'Discover endless culinary possibilities with our recipe tool—simply input an ingredient and unlock a world of dishes tailored to your taste.',
    github: 'https://github.com/KK1528/Food-Receipe-Search-Tool',
    demo: 'https://kk1528.github.io/Food-Receipe-Search-Tool/',
  },
  {
    id: 9,
    image: snake,
    title: 'Snake-game',
    body: 'Slither through the pixels and devour your way to victory in this JavaScript-powered snake game sensation.',
    github: 'https://github.com/KK1528/Snake-Game',
    demo: 'https://kk1528.github.io/Snake-Game/',
  },
  {
    id: 10,
    image: Notepad,
    title: 'Notepad',
    body: 'Keeper Notepad: Keeps your notes secure until deletion.',
    github: 'https://github.com/KK1528/Keeper-Notepad',
    demo: 'https://kk1528-notepad.vercel.app/',
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
