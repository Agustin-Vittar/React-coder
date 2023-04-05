
import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig";


const Navbar = ({children}) => {

  const [categoryList, setcategoryList] = useState([])

  useEffect(()=> {

    const itemCollection = collection(db, "categories");
    getDocs(itemCollection)
      .then(res => {
        let arrayCategories = res.docs.map(category => {
          return {
            ...category.data(),
            id: category.id
          };
        });

        setcategoryList(arrayCategories);
      });

  }, []);


  return (
    <div>
      <div className= {styles.containerNavbar}>
      <Link to="/">
        <div>
          <img src="https://res.cloudinary.com/djiasfflw/image/upload/v1678459845/Proyecto%20React/GAMING_STORE_oscuwr.png" alt="Logo"/>
        </div>
      </Link>
      <ul className= {styles.containerList}>
      <Link to="/">
          Colección
      </Link>
        {
          categoryList.map(category => {
            return <Link 
            key={category.id} 
            to={category.path} 
            className={styles.containerList}
            >
              {category.title}
            </Link>
          })
        }
      </ul>
      <Link to="/cart">
        <div>
          <h3 style={ {padding: "10px", color: "white"} }>Carrito</h3>
          <CartWidget/>
        </div> 
      </Link> 
      
       {children}
      
    </div>
    </div>
    
  )
}

export default Navbar