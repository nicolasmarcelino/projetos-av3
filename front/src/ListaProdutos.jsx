import { useEffect, useState } from "react";
import axios from "axios";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos")
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro:", error);
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