import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Button } from '@mui/material';
import "./Cart.css";
import Swal from 'sweetalert2'
import FormCheckout from '../FormCheckout/FormCheckout';
import { Link } from 'react-router-dom';



const Cart = () => {
  
  const { cart, clearCart, getTotalPrice, deleteProductById } = useContext(CartContext)

  const [showForm, setShowForm] = useState(false);

  const [orderId, setOrderId] = useState(null)

  const clear = ()=> {
    Swal.fire({
      title: 'Seguro que desea vaciar el carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito vaciado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito se mantiene como esta', '', 'info')
      }
    })

    if (orderId) {
      return (
        <div>
          <h2>Gracias por su compra</h2>
          <h4>El comprobantes es: {orderId}</h4>
          <Link to="/">Seguir comprando</Link>
        </div>
      )
    }
    
    
  }
  
  return (
    <div>
      {
        !showForm ? (
          <div className='cart-container'>
          <div className='container-items'>
            {
              cart.map ( (item) => {
                return (
                <div  key={item.id} className='cart-item'>
                  <img src={item.img} alt={item.title} style={{objectFit: "cover"}}/>
                  <div className='cart-item-info'>
                    <h2>{item.title}</h2>
                    <h2>${item.price}</h2>
                    <h2>Unidades: {item.quantity}</h2>
                    <Button color='secondary' onClick={() => deleteProductById(item.id)}>Eliminar</Button>
                  </div>
                </div>
                );
              })
            }
          </div>
        <div className='cart-info'>
          <div className='conteiner-compra'>
            <h3>Precio total: {getTotalPrice()}</h3>
          </div>
          <div className='conteiner-compra'>
            <h3>Descuento: -</h3>
          </div>
          <div className='conteiner-compra'>
            <h3>Precio final: -</h3>
          </div>
            {
              cart.length > 0 && (
                <div className='conteiner-compra'>
                    <Button variant='contained' color='secondary' onClick={()=> setShowForm(true)} >Terminar la compra</Button>
                    <Button color='secondary' onClick={()=> clear()}  variant='contained'>Vaciar carrito</Button>
                </div>
              )  
            }
            <div className='conteiner-compra'>
              <h1>El total del carrito es ${getTotalPrice()}</h1>
            </div>
          </div>
        </div>
        ) : <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
      }
        
    </div>
    
  ) 
  
}

export default Cart