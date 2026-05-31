import { Routes, Route } from "react-router-dom";
import ListaProdutos from "./ListaProdutos"; /* lista produtos */
import EditaProdutos from "./EditaProdutos"; /* lista produtos com link para editar */
import EditarProduto from "./EditarProduto"; /* edita produto */
import CriarProduto from "./CriarProduto"; /* cria produto */

function App() {
  return (
    <Routes>
      <Route path="/lista-produtos" element={<ListaProdutos />} />
      <Route path="/edita-produtos" element={<EditaProdutos />} />
      <Route path="/editar-produto/:id" element={<EditarProduto />} />
      <Route path="/criar-produto" element={<CriarProduto />} />
    </Routes>
  );
}

export default App;