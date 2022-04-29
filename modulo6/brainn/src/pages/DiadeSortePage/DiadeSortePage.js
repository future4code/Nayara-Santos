import React from "react";
import "./DiadeSorte.css";

const DiadeSortePage = () => {
  return (
    <div className="diadesorte--Geral">
      <div className="diadesorte--bloco1">
        <div className="diadesorte--h1">
          <h1>Dia de Sorte</h1>
        </div>

        <div className="blocoInter">
          <div className="diadesorte--botaoselecao">
            <select name="DiadeSorte" id="DiadeSorte">
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

      <div className="diadesorte--bloco2">
        <div className="diadesorte--Numeros">
          <div className="diadesorte--numeros">36</div>
          <div className="diadesorte--numeros">37</div>
          <div className="diadesorte--numeros">38</div>
          <div className="diadesorte--numeros">39</div>
          <div className="diadesorte--numeros">40</div>
          <div className="diadesorte--numeros">41</div>
          <div className="diadesorte--numeros">42</div>
        </div>
        <div className="diadesorteText">
          <div className="diadesortetext">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
};
export default DiadeSortePage;
