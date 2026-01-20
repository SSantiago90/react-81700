import { useParams } from 'react-router'
import ItemCount from './ItemCount'
import { useEffect, useState } from 'react';
import { getItemData } from '../data/firestore';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


import "./itemdetail.css"

function ItemDetailContainer(){
  const { itemID } = useParams();  
  const [product, setProduct] = useState({});
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  
  function onAddToCart(count){
    console.log("Agregando " + count +  " items al carrito.")    
    addItemToCart(product, count);
  }

  useEffect( () => {
    getItemData(itemID).then( response => setProduct(response))
  }, [])

  
  return(    
   <section className="item-detail">
      <h2>{product.title}</h2>
      <hr/>
      <img src={product.img} alt={product.title}></img>
      <p>{product.description}</p>
      <h4>$ {product.price}</h4>
      {/* pasar por props STOCK como valor máximo */} 
      <ItemCount onAddToCart={onAddToCart}/>
      <button onClick={ () => removeItemFromCart(product.id)} >Eliminar</button>
  </section>
  )
}

export default ItemDetailContainer