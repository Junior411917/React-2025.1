import { useEffect, useState } from "react";

export default function Effect() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("João");
  const [texto, setTexto] = useState("");
  const [hora, setHora] = useState(new Date());
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/Junior411917")
      .then((resposta) => resposta.json())
      .then((json) => setUser(json));
  }, []);

  useEffect(() => {
    // if (contador === 3) {
    //  alert("Teste de useEffetc");
    setInterval(() => {
      setHora(new Date());
      //  setTexto("Exemplo useEffect");
    }, 1000);

    //}, [contador]);
    //}, [texto]);
  }, [hora]);
  return (
    <div>
      <p>Login:{user.login}</p>
      <img src={user.avatar_url} alt="Imagem" />

      <p>Hora:{hora.toLocaleTimeString()}</p>
      <p>{texto}</p>
      <p>Contador:{contador}</p>
      <p>Nome:{nome}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button
        onClick={(prevNome) =>
          setNome(prevNome === "Antônio" ? "João" : "Antônio")
        }
      >
        Alterar Nome
      </button>
    </div>
  );
}
