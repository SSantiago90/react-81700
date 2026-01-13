import { createContext, useState } from "react";


  // * 1 . Crear context -> basico y estático -> createContext
  // * 2 . Consumir un context desde otro componente -> useContext
  // * 3.  Qué es un Provider -> context.Provider
const cartContext = createContext({ cart: [] });

const DefaultContextProvider = cartContext.Provider;

export function CartProvider( { children } ){
    // * CRUD -> Create, Read, Update, Delete
    // * 1. addItemToCart()
    // * Calcular precio total carrito
    // * Vaciar el carrito
    // * Calcular unidades cargadas al carrito

    const [cart, setCart] = useState([]);

    function addItemToCart(item, count){
        //cart.push(item); -> MAL❌   
        const newCart = structuredClone(cart); // deep clone
        // const newCartShallow = [...cart] // shallow copy
        newCart.push( { ...item, count } )    
        setCart(newCart);
    } 

    function removeItemFromCart(idRemove){
       const newCart = cart.filter( item => item.id !== idRemove)
       setCart(newCart);
    }

    function clearCart(){
      //vaciar carrito
    }

    function countItemsInCart(){
      let total = 0;
      cart.forEach( ( item ) => total += item.count)
      return total;
      // [].reduce()
    }

    function countTotalPrice(){
      // calcular costo total
    }

    return (
      <DefaultContextProvider value={  { cart: cart, addItemToCart, removeItemFromCart, countItemsInCart }  }>
          {children}
      </DefaultContextProvider>
    )
}

export default cartContext;

// * export useCartContext() -> hook personalizado
// useContext(cartContext)