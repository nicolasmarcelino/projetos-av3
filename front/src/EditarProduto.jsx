import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from "./api";
import "./index.css"

function EditarProduto() {
     const [produto, setProduto] = useState(null);
     const [msg, setMsg] = useState("");
     const [loading, setLoading] = useState(true);

     const { id } = useParams();

     const carregarProduto = async () => {
          try {
               setLoading(true);

               const response = await api.get(`/editar-produto/${id}`);
               console.log(response);

               setProduto(response.data);
          } catch (error) {
               console.log(error.response?.data);
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          carregarProduto();
     }, [id]);

     const atualizarProduto = async () => {
          try {
               const response = await api.put(`/editar-produto/${id}`, produto);

               console.log(response);
               setMsg("Produto atualizado com sucesso!");
          } catch (error) {
               console.log(error.response?.data);
               setMsg("Erro ao atualizar produto.");
          }
     };


     if (loading) return <p>Carregando...</p>;

     return (
          <>
               <h1>Editar produto {produto.id}</h1>

               <p>{msg}</p>

               <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                         type="text"
                         id="nome"
                         name="nome"
                         value={produto.nome || ""}
                         onChange={(e) =>
                              setProduto({ ...produto, nome: e.target.value })
                         }
                    />
               </div>

               <div>
                    <label htmlFor="preco">Preço</label>
                    <input
                         type="number"
                         id="preco"
                         name="preco"
                         value={produto.preco ?? 0}
                         onChange={(e) =>
                              setProduto({ ...produto, preco: parseFloat(e.target.value) })
                         }
                    />
               </div>

               <button onClick={atualizarProduto}>
                    Salvar
               </button>
          </>
     );
}

export default EditarProduto;