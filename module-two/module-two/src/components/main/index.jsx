import Button from '../botton'
import './style.css'
import ilustracao from '../../assets/ilustracao.png';
import menuMobile from '../mobile-menu';

const Main = () => {
    return(
        <div className="container-main">
            <div className="texto">
            
                <h1>Parte do minato Rap dos Kages</h1>
                <p>
                    Quem é que observa essa vila? De cima, liderando os ninjas
                    Disposto a dar sua própria vida, pra nos proteger igual família
                    Um dia vou ser eu, a carregar a vontade do fogo e realizar meu sonho
                    E um dia vai ter um monumento com o meu rosto
                    Pode me chamar de Yondaime, olha essa velocidade
                    Não tem outro ninja que corra metade
                    Mano, eu sou o Hokage, eu que mando na cidade
                    <br />
                    <br />
                    Danzo invejoso só passa vontade
                    Olha esse símbolo nas minhas costas
                </p>
                <Button className="btn-medio" color="color" mediun="mediun"/>
            </div>
            <div className="ilustracao">
                <img src={ilustracao} alt="ilustração"  />
            </div>
            
        </div>
    )
}

export default Main;