//O primeiro é uma função que pode ser reutilizado
//Já o segundo botão, trabalha com uma função exclusiva para ele
export default function Eventos() {
  const handleClick = () => {
    alert("clicado!");
  };
  return (
    <div>
      <h2>Trabalhando com eventos</h2>
      <button onClick={handleClick}>Evento de click</button>
      <p>Segundo botão de evento</p>

      <button onClick={() => alert("Clicando2!")}>Evento de click2</button>
    </div>
  );
}
