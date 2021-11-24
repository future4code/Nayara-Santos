import React from "react";
import Etapa1 from "./components/Etapa1"
import './App.css';

export default class App extends React.Component {

  mostrarOpcaoDosSelect = (event) => {
    console.log(event.tanget)
  }

  render() {
    return <div>
      <select onChange = {this.mostrarOpcaoDosSelect}>
        <option value={"Ensino Médio Incompleto"}>Ensino Médio Incompleto</option>
        <option value={"Ensino Médio Completo"}>Ensino Médio Completo</option>
        <option value={"Ensino Superior Incompleto"}>Ensino Superior Incompleto</option>
        <option value={"Ensino Superior Completo"}>Ensino Superior Completo</option>
      </select>
    </div>
  }
}