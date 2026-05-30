import { useEffect, useState } from "react";
import api from "./api";
import "./index.css"

function EditaProdutos() {
     const [produtos, setProdutos] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          api
               .get("/produtos")
               .then((response) => {
                    console.log(response)
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
                         <a href={`/editar-produto/${produto.id}`}>Editar</a>

                         <p>{produto.nome} - {produto.preco}</p>
                    </div>
               ))}
          </>
     );
}

export default EditaProdutos;