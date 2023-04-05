
import ItemList from "../ItemList/ItemList";

/* import { products } from "../../productsMock"; */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  
  const {categoryName} = useParams();
  
  const [items, setItems] = useState([]);

  /* const productosFiltrados = products.filter(elemento => elemento.category === categoryName); */

  useEffect(() => {
    /* const productList = new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 1000);
    });

    productList
      .then((res) => {
        setItems(res);
    })
      .catch((error) => {
        console.log(error); 

    
    });
    */
    const itemsCollection = collection(db, "products")

    let consulta = undefined

    if(categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName))
      consulta = getDocs(q)
    } else {
      consulta = getDocs(itemsCollection)
    }    

    consulta.then((res)=>{
      let products = res.docs.map((product)=>{
        return {
          ...product.data(),
          id: product.id
        }
      })

      setItems(products)
    })
 
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "450px"}}>
        <PacmanLoader color="#faff00" size={50}/>

      </div>
    );
  }
  
  return (
    <div>
      <ItemList items={items} />
    </div>
  )

  
}

export default ItemListContainer