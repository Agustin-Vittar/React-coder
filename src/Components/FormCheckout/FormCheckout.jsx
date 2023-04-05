import React, { useState } from 'react';

import {addDoc, collection, updateDoc, doc} from "firebase/firestore";
import { db } from '../../firebaseConfig';
import "./FormCheckout.css";

const FormCheckout = ({cart, getTotalPrice, setOrderId, clearCart}) => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        let total = getTotalPrice();

        let order = {
            buyer: userData,
            items: cart,
            total
        };

        let orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
            .then(res => {
                setOrderId(res.id)
                clearCart()
            })
            .catch((err) => console.log(err))

        cart.map((product)=> {
            let refDoc = doc(db, "products", product.id)
            updateDoc(refDoc, {stock: product.stock - product.quantity})
            return product
        })  
    }

  return (
    <div className='conteiner-checkout'>
        
        <form onSubmit={handleSubmit} className='container-form'> 
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" 
                placeholder='Nombre y Apellido' 
                value={userData.name} 
                onChange={(e) => setUserData({...userData, name: e.target.value})} 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"  
                placeholder='correo@correo.com'
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
            </div> 
            <div>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" 
                placeholder='+544531358' 
                value={userData.phone}
                onChange={(e) => setUserData({...userData, phone: e.target.value})} 
                />
            </div>
            
            <button type='submit'>Comprar</button>
        </form>
        
        
        
    </div>
  )
}

export default FormCheckout