import React, { useState } from "react";

export default function Estado() {
  // let valor = 100;
  const [valor, setValor] = useState(1);
  const [nome, setNome] = useState("Antônio");
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetar = () => setContador(0);
  //Função para fazer com que o botão calcular faça o cálculo em tempo real por click
  // function calcular() {
  //setValor(valor * 2);
  //console.log(valor);
  const mudarNome = () => {
    setNome((prevNome) => (prevNome === "Antônio" ? "João" : "Antônio"));
  };

  return (
    <div>
      <h1>Exemplo do uso do States</h1>
      <p>Resultado:{valor}</p>
      <button onClick={() => setValor(valor * 2)}>Calcular</button>
      <p>{nome}</p>
      <button onClick={mudarNome}>Trocar nome</button>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}> + </button>
      <button onClick={decrementar}> - </button>
      <button onClick={resetar}> resetar </button>
    </div>
  );
}
