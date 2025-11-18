
import './App.css'
import Button from './components/Button';
import Item from './components/Item'; // export default
import { ItemButton } from './components/Item'; // named export

function App() {  
  const user = "Roque";
  const templateSaludo = `Hola ${user}!!!`

  function randomColor(){
    return "yellow";
  }

    function saludarUsuario(){
    alert(templateSaludo)
  }

  const stylesText = { color: randomColor(), textTransform: "uppercase" };
  
  return (   
    <>
        <div>
          <h1>{ templateSaludo }</h1>
          <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"/>
        </div>
        <div>
          <h2>Aprendemos JSX</h2>
          <p style={ stylesText }  >El color favorito de {user} es { randomColor() } </p>
        </div>
         <div>
          <p>Sintaxis de eventos: <strong>camelCase</strong> </p>
          <button onClick={ saludarUsuario }>Click acá</button>
        </div>
       <hr/>  
        <div>
          <Item 
            title="Smartphone Xiaomi Redmi Note 13"            
            price={ 99.9 }
            categories = {  ["Xiaomi", "Mobile", "Smartphone"] }
            handleClick= { () => alert("Xiaomi 13")}
            img="https://carrefourbr.vtexassets.com/arquivos/ids/182538701/image-0.jpg?v=638724823315300000"
          />
          <Item 
            title="Smartphone Samsung A37 Plus" 
            price="120.50"
            handleClick= { () => alert("Samsung")}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jv0gsdgQ8rUXpP1YIGhIR6dAFugGE1rcsw&s"
            />
            <Item 
              title="iPhone 15" 
              price="150"
              handleClick= { () => alert("iPhone")}
              img="https://www.sagitariodigital.com.ar/wp-content/uploads/2023/09/iPH-15-2-1.jpg"
            />
        </div>      
        <hr/>
        <div>
          <h2>Gestión de Estado</h2>
          <Button label="Cambiar color"></Button>

        </div>

    </> 
  )
}

export default App
