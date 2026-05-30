import { useEffect, useState } from "react";
import api from "./api";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
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

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <h1>Produtos disponíveis</h1>

      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome} - {produto.preco}</p>
        </div>
      ))}
    </>
  );
}

export default ListaProdutos;