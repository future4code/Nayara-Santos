import styled from "styled-components"
import './App.css';

function App() {
  return (
    <div>
      <div>
        <button>Trocar de tela</button>
      </div>
      <div>
        <input className= "Nome"/>
        <input className= "Email"/>
        <button>Criar Usuario</button>
      </div>
    </div>
  );
}

export default App;