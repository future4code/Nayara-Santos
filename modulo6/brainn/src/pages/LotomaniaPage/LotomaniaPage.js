import React from "react";
import "./Lotomania.css";

const LotomaniaPage = () => {
  return (
    <div className="lotomania--Geral">
      <div className="lotomania--bloco1">
        <div className="lotomania--h1">
          <h1>Lotomania</h1>
        </div>

        <div className="blocoInter">
          <div className="lotomania--botaoselecao">
            <select name="Lotomania" id="Lotomania">
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

      <div className="lotomania--bloco2">
        <div className="lotomania--Numeros">
          <div className="lotomania--numeros">22</div>
          <div className="lotomania--numeros">23</div>
          <div className="lotomania--numeros">24</div>
          <div className="lotomania--numeros">25</div>
          <div className="lotomania--numeros">26</div>
          <div className="lotomania--numeros">27</div>
          <div className="lotomania--numeros">28</div>
        </div>
        <div className="lotomania--Text">
          <div className="lotomania--text">
            Este sorteio é meramente ilustrativo e não possui nenhuma ligação
            com a CAIXA.
          </div>
        </div>
      </div>
    </div>
  );
};
export default LotomaniaPage;
