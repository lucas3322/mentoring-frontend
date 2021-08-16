import './style.css'
import Navegation from '../navegation/index'
import Button from '../botton';
import Logo from '../../assets/logo.png';
import MenuMobile from '../mobile-menu';
import MobileMenuNav from '../mobile-menu-nav';
import { useState } from 'react';


const Header = (props) => {
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        if(isOpen === true){
            console.log('abriu')
            setOpen(false)
        }else{
            setOpen(true)
            console.log('fechou')
        }
    }


    return (
        <>
            <header className="container">
                
                <Navegation />
                    <div className="logo">
                        <img src={Logo} alt="mentoring" />
                    </div>
                <Button color="color" mediun="mediun"/>
                <MenuMobile cliqueaqui={handleClick} />
            </header>
            <MobileMenuNav visibilidade={isOpen}/>
        </>
    );
}

export default Header;