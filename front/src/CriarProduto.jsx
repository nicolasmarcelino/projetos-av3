import { useState } from "react"
import api from "./api"

function CriarProduto() {
     const [produto, setProduto] = useState({
          nome: '',
          preco: 0
     })

     const [msg, setMsg] = useState('')

     const criarProduto = async (e) => {
          e.preventDefault();

          try {
               const response = await api.post('/criar-produto', produto)

               setMsg('Produto de id '+response.data.id+' criado');
          } catch (error) {
               setMsg(error.response?.data?.message || 'Erro ao criar produto');
          }
     }

     const handleChange = (e) => {
          const { name, value } = e.target
          setProduto(prev => ({ ...prev, [name]: value }))
     }

     return (
          <>
               <p>{msg}</p>
               <form onSubmit={criarProduto} className="produto-form">
                    <div className="form-group">
                         <label htmlFor="nome">Produto</label>
                         <input
                              id="nome"
                              name="nome"
                              type="text"
                              value={produto.nome}
                              onChange={handleChange}
                              required
                         />
                    </div>

                    <div className="form-group">
                         <label htmlFor="preco">Preço</label>
                         <input
                              id="preco"
                              name="preco"
                              type="number"
                              value={produto.preco}
                              onChange={handleChange}
                              required
                         />
                    </div>

                    <button type="submit">
                         Criar produto
                    </button>
               </form>
          </>
     )
}

export default CriarProduto;