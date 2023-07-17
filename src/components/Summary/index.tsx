import icomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {


    return (<Container>

        <div>
            <header>
                <p>Entradas</p>
                <img src={icomeImg} alt="Entradas"></img>
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas"></img>
            </header>
            <strong>- R$500,00</strong>
        </div>

        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total"></img>
            </header>
            <strong>R$500,00</strong>
        </div>
    </Container>)



}