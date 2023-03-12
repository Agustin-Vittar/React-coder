import { useParams } from "react-router-dom";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/IteamCount";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));
  
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos `);
  }


  return (
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center", gap: "10px", width: "100%",height: "70vh"}}>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="" />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetailContainer