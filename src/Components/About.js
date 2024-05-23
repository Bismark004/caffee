import './About.css';
import Coffee from '../Assets/images/coffee IMAGE.png';

function  About() {
    <div className='about'>
        <div className='coffee-image'>
           <img src={Coffee} alt='cofee' />
        </div>

        <div className='text'>
             <h2>Discover Coffee Borcelle</h2>
             <h3>Discover Coffee Borcelle</h3>

             <p>
             At Coffee Borcelle, we're on a mission to redefine your coffee moments. 
             Our carefully curated selection of premium beans, sourced from the world's
              most renowned coffee regions.
              With expert craftsmanship and a commitment to quality,
              Join us in savoring the art of coffee, one cup at a time.
             </p>

             <button>Read More</button>
        </div>
    </div>

}
export default About;