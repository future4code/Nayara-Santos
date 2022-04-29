import React from "react";
import "./Quina.css";

const QuinaPage = () => {
  return (
    <div className="quina--Geral">
      <div className="quina--bloco1">
        <div className="quina--h1">
          <h1>Quina</h1>
        </div>

        <div className="quina--inter">
          <div className="quina--botaoselecao">
            <select name="Quina" id="Quina">
              <option>Mega-Sena</option>
              <option>Quina</option>
              <option>Lotofacil</option>
              <option>Lotomania</option>
              <option>Timemania</option>
              <option>Dia de Sorte</option>
            </select>
          </div>
        </div>
      </div>

      <div className="quina--bloco2">
        <div className="quina--Numeros">
          <div className="quina--numeros8">8</div>
          <div className="quina--numeros9">9</div>
          <div className="quina--numeros10">10</div>
          <div className="quina--numeros11">11</div>
          <div className="quina--numeros12">12</div>
          <div className="quina--numeros13">13</div>
          <div className="quina--numeros14">14</div>
        </div>
        <div className="quina--Text">
          <div className="quina--text">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuinaPage;
