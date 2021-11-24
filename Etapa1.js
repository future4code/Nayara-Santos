export default class Etapa1 extends React.Component{
    render(){
        return <div>
            <h1>ETAPA1. DADOS GERAIS</h1>
            <div>
      <select onChange = {this.mostrarOpcaoDosSelect}>
        <option value={"Ensino Médio Incompleto"}>Ensino Médio Incompleto</option>
        <option value={"Ensino Médio Completo"}>Ensino Médio Completo</option>
        <option value={"Ensino Superior Incompleto"}>Ensino Superior Incompleto</option>
        <option value={"Ensino Superior Completo"}>Ensino Superior Completo</option>
      </select>
    </div>
        </div>
      
    }
}