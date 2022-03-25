import React from "react"
import { useState } from 'react'
import "../ItemCount/itemCount.css"

const ItemCount = ({ initial = 0, stock, onAdd}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
            if(count > initial){
                setCount(count - 1)
            }
             
    }

    return(
        <div class="card ms-5">
            <div class="card-body">
            <p class="text-center">{count}</p>
            <button type="button" class="btn btn-danger " onClick={decrement}>-</button>
            <button type="button" class="btn btn-dark ms-3 me-3" onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button type="button" class="btn btn-success" onClick={increment}>+</button>
            </div>            
        </div>
        
    )
}

export default ItemCount