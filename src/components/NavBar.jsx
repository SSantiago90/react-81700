import { NavLink } from "react-router"
export default function NavBar(){
  return (
    <nav>
      <NavLink to="/">
        <h2>Logo</h2>
      </NavLink>
      <li>
        <NavLink to="/category/Samsung">Samsung</NavLink>
      </li>
      <li>
        <NavLink to="/category/xiaomi">Xiaomi</NavLink>
      </li>
      <li>
        <NavLink to="/category/motorola">Motorola</NavLink>
      </li>
      {/* CartWidget  */}
    </nav>
  )
}