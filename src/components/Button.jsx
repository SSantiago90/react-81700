// ? Estado / State - > 💓
// * Hooks 🪝
import { useState } from "react"

export default function Button(props){
  var [ colorFondo, setColorFondo ] = useState("#4353baff");  
  
  function handleChangeColor() {
    console.log("Cambiando color")
     setColorFondo("#bb3377"); // Re-renderizamos el componente con nuevo state
  }

  return (
    <button onClick={handleChangeColor} style={{ backgroundColor: colorFondo}}>
      {props.label}
    </button>
  )
}