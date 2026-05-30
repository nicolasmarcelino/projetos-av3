import { useEffect, useState } from "react"

function Carrinho({ carrinho }) {
     const [formaPagamento, setFormaPagamento] = useState('dinheiro')

     const total = carrinho.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.preco
     }, 0) /* padrão de acumulador para cálculo do total a pagar */

     const selecionarFormaPagamento = (event) => {
          setFormaPagamento(event.target.value)
     };

     return (
          <div className="carrinho">
               <h1>Carrinho</h1>
               <ul>
                    {carrinho.map((produto, index) => (
                         <li key={index}>{produto.nome} — R${produto.preco}</li>
                    ))}
               </ul>
               <p>Total a pagar: R${total}</p>
               <select value={formaPagamento} onChange={selecionarFormaPagamento}>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="pix">Pix</option>
                    <option value="cartao">Cartão</option>
               </select>
               <button onClick={() => {alert(`Pago R$${total} em ${formaPagamento}`)}}>
                Adicionar ao carrinho
              </button>
          </div>
     )
}

export default Carrinho