import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"

const ItemDetail = ({name,category,img,stock,precio}) =>{

    const [quantity,setQuantity] = useState (0)

    const handleOnAdd = (count) =>{
        setQuantity(count)
    }

    return(
        <div className="text-center mt-5 mb-5"> 
            <img src={img} className="rounded" alt={name}></img>
            <div className="card-body" >
            <h5>Detalles del Producto</h5>   
            <h6 className="card-title">{name}</h6>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">Precio:{precio}</p>
            <p className="card-text">Stock:{stock}</p>  
            </div>
             {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <button className="btn btn-dark">Ir al carrito</button>}
        </div>
    )
}

export default ItemDetail