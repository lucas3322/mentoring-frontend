import './style.css';
import  React  from 'react';


const onCLivk = () => {
    console.log('Cliquei ')
}


const Button = (props) => {

    const {
        color,
        mediun,
        large
    } = props


    return(
        <button  onClick={onCLivk} className={`btn btn-${color} btn-${mediun}`}>
            Entrar
        </button>
    );
}

export default Button;