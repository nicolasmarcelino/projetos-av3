import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sistema de Compras</h1>

      <button onClick={() => navigate("/gerente")}>
        Eu sou gerente
      </button>

      <button onClick={() => navigate("/cliente")}>
        Eu sou cliente
      </button>
    </div>
  );
}

export default Home;