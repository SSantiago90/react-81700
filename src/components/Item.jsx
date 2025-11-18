export default function Item( {title, img, price, handleClick} ){
  // const { title, img, price }  = props //props.title
  // ! Sugar Syntax 
  
  console.log("Props:", title, img, price)

  return (
    <div style={{ border: "solid 1px white", borderRadius: "8px", padding: "16px", margin: "12px auto"}}>
      <h3>{title}</h3>
      <img width="220" src={img} />
      <p>$ {price}</p>      
      <button onClick={handleClick}>Ver producto</button>
    </div> 
  )  
}

export function ItemButton(){
  return(
    <>
      <h2>Hola ItemButton</h2>
      <button>Click aquí</button>
    </>
  )
}