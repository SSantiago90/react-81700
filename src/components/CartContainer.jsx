import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/firestore"
import "./cartcontainer.css";

export default function CartContainer(){
  const { cart } = useContext(cartContext)
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: ""
  })

  console.log(formData)

  function handleCheckout(){
     const buyOrder = {
       buyer: formData,
       items: cart,
       total: 999,       
       date: new Date()        
     }
     createBuyOrder(buyOrder)
  }

  function handleSubmit(event){
    console.log(event.target)
    event.preventDefault()
  }

  function handleChange(event){
    const { value, name } = event.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }

  function handleReset(){
    setFormData({
    username: "",
    phone: "",
    email: ""
  })
  }
 

  return(
    <>

    <div className="cart-container">
       <div className="cart-header">
         <h2>Tu carrito de compras</h2>
       </div>
       
       {cart.length === 0 ? (
         <div className="empty-cart-message">
           <p>No hay productos en el carrito.</p>
         </div>
       ) : (
         <div className="cart-items">
            {
              cart.map( item => (
                <div key={item.id} className="cart-item">
                  <div className="item-details">
                    <span className="item-title">{item.title}</span>
                    <div className="item-price-info">
                      <span>Precio unitario: ${item.price}</span>
                      <span>Cantidad: {item.count}</span>
                      <span>Subtotal: ${item.price * item.count}</span>
                    </div>
                  </div>
                  <button className="remove-btn">Quitar</button>
                </div>
              ))
            }
         </div>
       )}     

         <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <label for="username">
            Nombre de usuario:
            <input 
              onChange={ handleChange }
              name="username"              
              type="text" 
              placeholder="Nombre completo"
              value={formData.username}
            />
          </label>
          <br/>
           <label for="email">
            Email:
            <input 
              onChange={ handleChange }             
              name="email"              
              type="email" 
              placeholder="tumail@mail.com"
              value={ formData.email }
            />
          </label>
            <br/>
           <label for="phone">
            Teléfono: 
            <input 
              onChange={ handleChange }
              name="phone"              
              type="number" 
              placeholder="123456"
              value={formData.phone}
            />
          </label>  
          <br/>
          <br/>
         <div className="cart-actions">
          <button className="checkout-btn" onClick={handleCheckout}>Confirmar compra</button>
        </div>
        <br/>
         <button  onClick={handleReset} type="reset">Cancelar</button>
        </form>
    </div>

    </div>


 
    
    </>
  )
}