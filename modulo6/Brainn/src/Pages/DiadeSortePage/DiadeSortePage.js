import React from "react";

const DiadeSortePage = () => {
  return (
    <div className="divmae">
    <div className="bloco1">

      <div className="blocoInter">
         <div className="botaoselecao">
          <select name="Dia de Sorte" id="Dia de Sorte">
            <option>Mega-Sena</option>
            <option>Quina</option>
            <option>Lotofacil</option>
            <option>Lotomania</option>
            <option>Timemania</option>
            <option>Dia de Sorte</option>
          </select>
        </div>
      </div>
      <div className="bloco2">
        <div className="blocoNumeros">
          <div className="numeros">1</div>
            <div className="numeros">2</div>
              <div className="numeros">3</div>
               <div className="numeros">4</div>
                <div className="numeros">5</div>
                 <div className="numeros">6</div>
                  <div className="numeros">7</div>
            </div>
            <div className="blocoDetexto">
              <div className="text">Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</div>
            </div>
            </div>
            </div>
            </div>
  );
};

export default DiadeSortePage;