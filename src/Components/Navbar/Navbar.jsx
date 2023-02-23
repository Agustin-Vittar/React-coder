
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className= {styles.containerNavbar}>
      <img src="https://res.cloudinary.com/djiasfflw/image/upload/v1677100398/Proyecto%20React/15478137_5631157_r4j5af.jpg" alt="Logo" style={{width: "5%"}}/>
      <ul className= {styles.containerList}>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <div>
        <h3 style={ {padding: "10px", color: "rgb(255, 166, 0)"} }>Carrito</h3>
        <CartWidget/>
      </div>
      
    </div>
  )
}

export default Navbar