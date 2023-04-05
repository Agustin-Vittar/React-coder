import React from 'react'
import IteamCount from '../ItemCount/IteamCount'
import "./ItemDetailContainer.css";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{productSelected.title}</h1>
        <img src={productSelected.img} alt={productSelected.title} />
        <p>{productSelected.description}</p>
        <IteamCount stock={productSelected.stock} onAdd={onAdd} initial={quantity}/>
      </div>
    </div>
  )
}

export default ItemDetail