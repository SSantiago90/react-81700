import { useContext } from "react"
import cartContext from "../context/cartContext";
import { Link } from "react-router";
import "./cartwidget.css";


export default function CartWidget(){
  const { countItemsInCart } = useContext(cartContext);
  // * VALUE
  
  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{ countItemsInCart() }</span>
    </Link>
  )
}