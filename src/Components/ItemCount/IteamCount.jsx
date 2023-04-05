import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "./ItemCount.css";

const IteamCount = ({stock, initial=1, onAdd}) => {
  
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
        setContador(contador - 1);
    }
  };
  
    return (
    <div className="container-btn">
      <h2>Cantidad: {contador}</h2>
      <div className="btns">
        <Button variant="outlined" onClick={sumar}>+</Button>
        <Button variant="contained" color="secondary" onClick={()=> onAdd(contador)}>Agregar al Carrito</Button>
        <Button variant="outlined" onClick={restar}>-</Button>
      </div>        
            
    </div>
  )
}

export default IteamCount