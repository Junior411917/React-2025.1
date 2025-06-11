import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Contato from "../pages/Contato";
import Noticias from "../pages/Noticias";
import Error from "../pages/Error";
import Produto from "../pages/Produto";

export default function AppRouter() {
  return (
    //Obs: aqui, a primeira rota é o index
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/empresa" element={<Empresa />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      <Route path="/noticias" element={<Noticias />}></Route>
      <Route path="*" element={<Error />}></Route>
      <Route path="/produtos/:id" element={<Produto />}></Route>
    </Routes>
  );
}
