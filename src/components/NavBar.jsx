import { NavLink } from "react-router"
import "./navbar.css"
import CartWidget from "./CartWidget"

export default function NavBar(){
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h2>Logo</h2>
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/category/Samsung">Samsung</NavLink>
        </li>
        <li>
          <NavLink to="/category/xiaomi">Xiaomi</NavLink>
        </li>
        <li>
          <NavLink to="/category/motorola">Motorola</NavLink>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  )
}