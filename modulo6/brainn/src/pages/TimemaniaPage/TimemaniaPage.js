import React from "react";
import "./Timemania.css";

const TimemaniaPage = () => {
  return (
    <div className="timemania--Geral">
      <div className="timemania--bloco1">
        <div className="timemania--h1">
          <h1>Timemania</h1>
        </div>

        <div className="blocoInter">
          <div className="timemania--botaoselecao">
            <select name="Timemania" id="Timemania">
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

      <div className="timemania--bloco2">
        <div className="timemania--Numeros">
          <div className="timemania--numeros">29</div>
          <div className="timemania--numeros">30</div>
          <div className="timemania--numeros">31</div>
          <div className="timemania--numeros">32</div>
          <div className="timemania--numeros">33</div>
          <div className="timemania--numeros">34</div>
          <div className="timemania--numeros">35</div>
        </div>
        <div className="timemania--Text">
          <div className="timemania--text">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimemaniaPage;
