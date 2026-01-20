import { useContext } from "react"
import cartContext from "../context/cartContext";
import { Link } from "react-router";


export default function CartWidget(){
  const { countItemsInCart } = useContext(cartContext);
  // * VALUE
  
  return (
    <Link to="/cart">
      <span>🛒 ( { countItemsInCart() })</span>
    </Link>
  )
}