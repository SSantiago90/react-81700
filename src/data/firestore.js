import { initializeApp } from "firebase/app";
import {  addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import products from "./products";

const firebaseConfig = {
  apiKey: "AIzaSyB1niVn_x4vN1P8EorPfTljUx7G6Z_jqbU",
  authDomain: "coder-81700.firebaseapp.com",
  projectId: "coder-81700",
  storageBucket: "coder-81700.firebasestorage.app",
  messagingSenderId: "562532740949",
  appId: "1:562532740949:web:027978cca217e0ab8b89dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// * Retornar todos los documentos
// * fetch -> data.json() -> data
// ? snapshot -> docs[] -> doc.data() -> data...

export async function getData(){
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef)
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({ ...item.data(), id: item.id})    
  })
  
  return dataDocs;
}


export async function getItemData(itemID){
  const documentRef = doc(db, "products", itemID);
  const docSnapshot = await getDoc(documentRef)
  console.log(docSnapshot)
  const docData = docSnapshot.data()
  const docDataWithID = { ...docData, id: docSnapshot.id}
  return docDataWithID;

/*   if (docSnapshot.exists()) {
    return docDataWithID;
  } else {
    throw new Error("Documento no existe")
  } 
 */
}

export async function getCategoryData(categoryID){
  const collectionRef = collection(db, "products");
  const q = query(collectionRef, where("category", "==", categoryID))
  const productsSnapshot = await getDocs(q)

  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ({ ...item.data(), id: item.id})    
  })
  
  return dataDocs;
}

export async function createBuyOrder(buyOrderData){
  const collectionRef = collection(db, "orders")

  const docRef = await addDoc(collectionRef, buyOrderData);

  alert(`Gracias por tu compra! Tu ticket id es: ${docRef.id}`)
}

export async function exportProductsToFirestore(){
  
  // * for... of -> ok con async
  for(let item of products){
    delete item.id;
    const docRef = await addDoc( collection(db, "products"), item )     
    console.log("Doc creado:", docRef.id)
  }  
}