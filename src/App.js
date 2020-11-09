import React from 'react';
import './App.css';
import ButtonsOfCounter from './componets/ButtonsOfCounter'
import Viewfinder from './componets/Viewfinder'
import { CounterProvider } from './contexts/ContextCounter'

function App() {
  return (
    <div className="App">
      <h1>Counter with Context API</h1>
      {/* Iniciando o contexto e envolvendo os filhos que teram acesso a ele. */}
      <CounterProvider>
        <Viewfinder></Viewfinder>
        <ButtonsOfCounter></ButtonsOfCounter>
      </CounterProvider>
    </div>
  );
}

export default App;
