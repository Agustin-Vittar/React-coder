import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import {db} from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const { agregaralCarrito, getQuantityById } =useContext( CartContext )

  const [productSelected, setproductSelected] = useState({})

  useEffect(()=> {
    const itemCollection = collection(db, "products")

    const ref = doc(itemCollection, id)
    getDoc(ref)
      .then(res => {
        setproductSelected({
          ...res.data(),
          id: res.id 
        })
      })
  }, [id])
  
  const onAdd = (cantidad) => {

    let producto = {
      ...productSelected,
      quantity: cantidad
    }

    agregaralCarrito(producto);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu producto fue agregado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  let quantity = getQuantityById(Number(id));


  return (

    <ItemDetail productSelected={productSelected} onAdd={onAdd} quantity={quantity}  />
  )
}

export default ItemDetailContainer