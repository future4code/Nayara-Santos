import React from "react";
import "./MegaSena.css"

const MegaSenaPage = () => {
  return (
    <div className="megasena--Geral">
      <div className="megasena--bloco1">
        <div className="megasena--h1">
          <h1>Mega-Sena</h1>
        </div>

        <div className="megasena--Inter">
          <div className="megasena--botaoselecao">
            <select name="Mega-Sena" id="Mega-Sena">
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

      <div className="megasena--bloco2">
        <div className="megasena--Numeros">
          <div className="numeros--1">1</div>
          <div className="numeros--2">2</div>
          <div className="numeros--3">3</div>
          <div className="numeros--4">4</div>
          <div className="numeros--5">5</div>
          <div className="numeros--6">6</div>
          <div className="numeros--7">7</div>
        </div>
        <div className="megasena--Text">
          <div className="megasena--text">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
}
export default MegaSenaPage;