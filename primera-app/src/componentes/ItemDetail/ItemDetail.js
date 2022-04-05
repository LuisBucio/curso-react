import React from "react"


const ItemDetail = ({name,category,img,stock,precio}) =>{

    return(
        <div className="text-center mt-5">
            <img src={img} className="rounded" alt={name}></img>
            <div className="card-body" >
            <h5>Detalles del Producto</h5>   
            <h6 className="card-title">{name}</h6>
            <p className="card-text">Categoria:{category}</p>
            <p className="card-text">Precio:{precio}</p>
            <p className="card-text">Stock:{stock}</p>  
            </div>
            <itemCount/>
        </div>
    )
}

export default ItemDetail