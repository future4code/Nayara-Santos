import React from "react";
import "./Lotofacil.css";

const LotofacilPage = () => {
  return (
    <div className="lotofacil--Geral">
      <div className="lotofacil--bloco1">
        <div className="lotofacil--h1">
          <h1>Lotofacil</h1>
          
        </div>

        <div className="blocoInter">
          <div className="lotofacil--botaoselecao">
            <select name="Lotofacil" id="Lotofacil">
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

      <div className="lotofacil--bloco2">
        <div className="lotofacil--Numeros">
          <div className="lotofacil--numeros">15</div>
          <div className="lotofacil--numeros">16</div>
          <div className="lotofacil--numeros">17</div>
          <div className="lotofacil--numeros">18</div>
          <div className="lotofacil--numeros">19</div>
          <div className="lotofacil--numeros">20</div>
          <div className="lotofacil--numeros">21</div>
        </div>
        <div className="lotofacil--Text">
          <div className="lotofacil--text">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
};
export default LotofacilPage;
