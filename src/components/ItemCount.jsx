import { useState } from "react"

import "./itemcount.css"

export default function ItemCount( props ){
  const [count, setCount] = useState(1);


  function handleResta(){
    // Antes de calcular, validamos si llegamos al mínimo (2)
    setCount(count - 1);
  }

  function handleSuma(){      
    // Antes de calcular, validamos si llegamos al máx
      setCount(count + 1);
  }

  return (
    <div className="item-count">
    <div className="item-count-actions">
        <button onClick={ handleResta }>-</button>
        <span>{count}</span>
        <button onClick={ handleSuma }>+</button>
    </div>
    <button onClick={ () => props.onAddToCart(count) }className="add-to-cart">Agregar al carrito</button>
    </div>
  )
}