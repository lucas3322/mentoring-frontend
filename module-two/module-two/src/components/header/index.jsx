import './style.css'
import Navegation from '../navegation/index'
import Button from '../botton';
import Logo from '../../assets/logo.png';


const Header = () => {
    return (
        <header className="container">
            
            <Navegation />
                <div className="logo">
                    <img src={Logo} alt="mentoring" />
                </div>
            <Button color="color" mediun="mediun"/>
        </header>
    );
}

export default Header;