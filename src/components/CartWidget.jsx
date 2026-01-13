import { useContext } from "react"
import cartContext from "../context/cartContext";


export default function CartWidget(){
  const { countItemsInCart } = useContext(cartContext);
  // * VALUE
  
  return <span>🛒 ( { countItemsInCart() })</span>
}