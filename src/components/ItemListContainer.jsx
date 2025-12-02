import products from "../data/products"
import Item from "./Item"
import getData from "../data/mockService"

export default function ItemListContainer(props){

  console.log( "Promesa:", getData() );

  // async await / fetch
  getData().then( (respuesta) => {
    console.log("Promesa terminada")
    console.log(respuesta)
  }).catch( (error) => {
    alert(error)
  })
 
  return (
    <section>
        <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
        {
            products.map( 
             (item) => <Item 
                  key={item.id}
                   {...item} // spread
                  />
            )
        }       
    </section>      
  )
}