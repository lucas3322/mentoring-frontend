import './style.css'


const MenuMobile = (props) => {
    const {cliqueaqui} = props
  
    return (
        <div  onClick={cliqueaqui} className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default MenuMobile;