import './About.css';
import Coffee from '../Assets/images/coffee IMAGE.png';

function  About() {
    return (
    <div className='about'>
           <img src={Coffee} alt='cofee' />
    

        <div className='text'>
             <h2>Discover Coffee Borcelle</h2>
             <h4>Elevating Your Coffee Experience</h4>

             <p>
             At Coffee Borcelle, we're on a mission to redefine your coffee moments. 
             Our carefully curated selection of premium beans, sourced from the world's
              most renowned coffee regions. <br/> <br/>
              With expert craftsmanship and a commitment to quality,
              Join us in savoring the art of coffee, one cup at a time.
             </p>

             <button>Read More</button>
        </div>
    </div>
    );
}
export default About;