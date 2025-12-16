import products from "./products"

const miPromise = new Promise( (resolve,reject) => { 
    console.log("Iniciando promesa...")
    setTimeout( () => { resolve("Promise terminada") }, 1000)      
    //reject("Error!")      
} )


function getData(){
  const promiseData = new Promise( (resolve,reject) => { 
    console.log("Solicitando datos a la Base de datos")
    //reject("Algo salió mal")
    setTimeout( () => { resolve(products) }, 1500)  
  })
  return promiseData
}

export default getData;