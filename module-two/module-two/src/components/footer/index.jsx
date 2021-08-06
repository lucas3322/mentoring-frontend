import './style.css'
import Logo from '../../assets/logo.png';
import Button from '../botton';
import Navegation from '../navegation/index';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png'
import Youtube from '../../assets/youtube.png'
import Instagran from '../../assets/instagram.png'

const Footer = () => {
    return (
        <footer className="foot ">
            <div className="container-bot">
                <div className="organiza-rodape">
                    <p>©2021 Frontend Mentoring</p>
                    <div className="logo">
                        <img src={Logo} alt="mentoring" />
                    </div>
                    <div className="btn-bot">
                        <Button color="color" mediun="mediun"/>
                    </div>
                </div>
                <div className="organiza-rodape finaly">
                    <Navegation />
                    <div className="social-media">
                        <img src={Facebook} alt="facebook" />
                        <img src={Linkedin} alt="Linkedin" />
                        <img src={twitter} alt="Twitter" />
                        <img src={Youtube} alt="Youtube" />
                        <img src={Instagran} alt="Instargam" />
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;