import { useContext } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/firestore"

export default function CartContainer(){
  const { cart } = useContext(cartContext)

  function handleCheckout(){
     // ... validar datos de formulario
     const buyOrder = {
       buyer: "Roque",
       items: cart,
       total: 999, // calcular total desde context       
       date: new Date()        
     }
     createBuyOrder(buyOrder)
  }

  return(
    <div>
       <h2>Tu carrito de compras</h2>
       <div>
          <ul>
            {
              cart.map( item => <li>
                { item.title} - ${item.price} - Cantidad: {item.count} <button>Quitar del carrito</button>
              </li>)
            }
          </ul>
       </div>
      <button onClick={handleCheckout}>Confirmar compra</button>
      {/* form */}
    </div>
  )
}