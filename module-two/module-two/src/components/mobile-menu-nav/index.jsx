import './style.css'

const MobileMenuNav = (props) => {
    return(
        <div className={`mobile-menu-nav ${props.visibilidade == true ? 'visible' : ''}`}>
            <ul className="nav">
                <li>Home</li>
                <li>Sobre</li>
                <li>Contatos</li>
            </ul>
        </div>
    )
}

export default MobileMenuNav;