import { Routes, Route } from "react-router-dom";
import ListaProdutos from "./ListaProdutos";

function App() {
  return (
    <Routes>
      <Route path="/lista-produtos" element={<ListaProdutos />} />
    </Routes>
  );
}

export default App;