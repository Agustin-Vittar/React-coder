
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";



const Navbar = ({children}) => {
  return (
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
        <Link to="/category/accion">
          Acción
        </Link>
        <Link to="/category/fantasia">
          Fantasía
        </Link>
        <Link to="/category/supervivencia">
          Supervivencia
        </Link>
      </ul>
      <Link to="/cart">
        <div>
          <h3 style={ {padding: "10px", color: "white"} }>Carrito</h3>
          <CartWidget/>
        </div> 
      </Link>
        
      
       {children}
      
    </div>
  )
}

export default Navbar