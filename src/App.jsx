
import './App.css'

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
    </> 
  )
}

export default App
