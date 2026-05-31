import { useEffect, useState } from "react";
import Carrinho from "./Carrinho"
import "./index.css"
import api from "./api";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prevCarrinho => [...prevCarrinho, produto]);
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="home-usuario">
      <div className="lista-produtos">
        <h1>Produtos disponíveis</h1>

        <ul>
          {produtos.map((produto) => (
            <li className="produto-disponivel" key={produto.id}>
              <span>
                {produto.nome} - R${produto.preco}
              </span>

              <button onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao carrinho
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </div>
  );
}

export default ListaProdutos;