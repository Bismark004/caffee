import './Sponsors.css';
import Cup from '../Assets/images/_fc7453b1-09e1-461e-ab26-e5abf26cd954-removebg-preview_cleanup 1.png';

function Sponsors() {
    return  (
        <div className='sponsors'>
            <div className='reviews'>
                <h2>Reviews</h2>
                <img src={Cup} alt='cup' />
            </div>

            <div className='sub-heading'>
                <p>What other people are saying</p>
            </div>

            <div className='container'>
                <div className='testimonies'>
                    <p className='word'>
                    "Indulge in the sublime experience of Coffee Borcelle,
                     where every sip is a journey to flavor paradise. Crafted with precision,
                     our rich blends ignite the senses and redefine coffee appreciation." 
                    </p>

                    <p className='person'>
                    @elonmusk
                    </p>

                </div>

                <div className='testimonies'>
                    <p className='word'>
                    "Discover a world of taste with Coffee Brocelle.
                     Each cup is a masterpiece,
                     blending aromas and flavors that dance on your palate. 
                     Join us in celebrating coffee at its finest." 
                    </p>

                    <p className='person'>
                         @JeffBezos
                    </p>

                </div>

                <div className='testimonies'>
                    <p className='word'>
                    “Welcome to the heart and soul of coffee passion –Coffee Borcelle.
                     Our carefully curated beans are an ode to craftsmanship,
                     brewing a story of perfection in every cup.” 
                    </p>

                    <p className='person'>
                    @MrBeast
                    </p>

                </div>

            </div>

        </div>

    )
} 
export default Sponsors;