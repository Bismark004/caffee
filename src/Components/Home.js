import './Home.css';
import Logo from '../Assets/images/logo.png';



function Home () {
    return (
        <div className=' home'>
            <div className=' header'>
                <div className= 'logo'>
                    <img src={Logo} alt='logo'/>

                </div>

                <ul className='menu'>
                    <li className='first'>
                        <span>Home</span>
                    </li>
                
                    <li>
                        <span>Features</span>
                    </li>

                    <li>
                        <span>About us</span>
                    </li>

                    <li>
                        <span>Purchase</span>
                    </li>

                    <li>
                        <span>contact us</span>  
                    </li>
                  
                </ul>

            </div>


            <div class="words">
               
                    <p class="main">Coffee Makes Mood</p>
                    <p class="indulge">Indulge in every sip: Experience the Richness of Coffee</p>
            </div>

        
        </div>



    )
}
export default Home;
 