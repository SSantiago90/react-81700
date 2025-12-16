
import Item from "./Item"
import getData from "../data/mockService"
import './itemlist.css'
import { useEffect, useState } from "react"
export default function ItemListContainer(props){
  const [products, setProducts] = useState([]);
 

  // async await / fetch / Sugar sytax
  async function fetchProducts(){   
    try {
      const respuesta = await getData()  
      setProducts(respuesta);
    }
    catch(error){
      alert(error);
    }     
  }

  useEffect( fetchProducts, [])
 
 
  return (
    <section>
        <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
        <div className="itemlist">
        {
          products.map( 
            (item) => <Item 
              key={item.id}
              {...item} // spread
            />
          )
        }       
        </div>
    </section>      
  )
}