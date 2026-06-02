import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ListaProdutos from "./ListaProdutos";
import EditaProdutos from "./EditaProdutos";
import EditarProduto from "./EditarProduto";
import CriarProduto from "./CriarProduto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/gerente" element={<EditaProdutos />} />
      <Route path="/criar-produto" element={<CriarProduto />} />
      <Route path="/editar-produto/:id" element={<EditarProduto />} />

      <Route path="/cliente" element={<ListaProdutos />} />
    </Routes>
  );
}

export default App;