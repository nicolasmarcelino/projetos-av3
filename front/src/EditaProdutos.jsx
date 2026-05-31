import { useEffect, useState } from "react";
import api from "./api";
import "./index.css"

function EditaProdutos() {
     const [produtos, setProdutos] = useState([]);
     const [loading, setLoading] = useState(true);

     const carregarProdutos = async () => {
          try {
               setLoading(true)

               const response = await api.get("/produtos");
               setProdutos(response.data);
          } catch (error) {
               console.error("Erro:", error);
          } finally {
               setLoading(false);
          }
     };

     const deletarProduto = async (id) => {
          if (!window.confirm("Deseja realmente excluir este produto?")) {
               return;
          }

          try {
               const response = await api.delete(`/deletar-produto/${id}`);
               console.log(response);

               await carregarProdutos();
          } catch (error) {
               console.error(error);
          }
     };

     useEffect(() => {
          carregarProdutos();
     }, []);


     if (loading) return <p>Carregando...</p>;

     return (
          <>
               <h1>Produtos disponíveis</h1>
               <a href="/criar-produto">Adicionar produto</a>

               {produtos.map((produto) => (
                    <div key={produto.id} className="item-produto">
                         <p>{produto.nome} - R${produto.preco}</p>
                         <a href={`/editar-produto/${produto.id}`}>Editar</a>
                         <button onClick={() => deletarProduto(produto.id)}>
                              Deletar
                         </button>
                    </div>
               ))}
          </>
     );
}

export default EditaProdutos;