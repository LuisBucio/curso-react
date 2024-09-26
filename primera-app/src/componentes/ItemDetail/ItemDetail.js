import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import { useState,useContext } from "react"
// import { CartContext } from "../../App"
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const ItemDetail = ({name,category,img,stock,precio}) =>{

    const [quantity, setQuantity] = useState(0)

    // const {cart, setCart} = useContext(CartContext)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (count) =>{
        setQuantity(count)
        // setCart([...cart,{name,precio,count}])
        addItem({name,precio},quantity)
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
             {quantity === 0 ? <ItemCount onAdd={handleOnAdd}/> : <Link to="/cart" className="btn btn-dark">Ir al carrito</Link>}
             
        </div>
    )
}

export default ItemDetail