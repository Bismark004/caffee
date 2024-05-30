import "./Footer.css";
import Borcelle from "../Assets/images/Borcelle__2_-removebg-preview 1.png";
import Envelope from "../Assets/images/envelope-regular 1.png";
import Vector from "../Assets/images/Vector.png";


function Footer(){
    return (
        <div className="footer">
            <div className="forms">
            <div className="top">
                <h3 className="contact-us">
                    Contact Us
                </h3>

                <p className="send-us">
                    Send us a message
                </p>

                </div>
                

                <input type="text" placeholder="Full name"/>

                <input type="text" placeholder="Your email"/>

                <textarea placeholder="Your Message"/>

                <button >Submit</button>

            </div>

            <div className="sitemap">
               <div className="top">
                <h3 className="contact-us">
                    Contact Us
                </h3>

                <p className="send-us">
                    Send us a message
                </p>

                </div>

                <ul>
                    <li>- Home</li>
                    <li>- About Us</li>
                    <li>- Feature</li>
                    <li>- Pricing</li>
                    <li>- Contact Us</li>
                </ul>

                
            </div>

            <div className="last">
                <img className="logo" src={Borcelle} alt="Borcelle"/>
                
                <div className='phone'>
                    <img src={Vector}  alt='phone'/>
                    <p>(08) 400 2000</p>
                </div>

                <div className='envelope'>
                    <img src={Envelope} alt='envelope'/>
                    <p>Coffeborcelle@gmail.com</p>
                </div>
                
                
            </div>
            
        </div>

    )
}
export default Footer; 