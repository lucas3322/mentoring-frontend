import './style.css';
import  React  from 'react';

const Button = (props) => {

    const {
        color,
        mediun
    } = props

    return(
        <button className={`btn btn-${color} btn-${mediun}`}>
            Entrar
        </button>
    );
}

export default Button;