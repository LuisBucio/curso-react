import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const Item = ({product}) => {

    return(
      <div class="card ms-5">
          <div class="card-body text-center">
            <h6 class="card-title">{product.name}</h6>
               <img src={product.img} class="card-img-top"  /> 
            <p class="card-text">Precio: ${product.precio}</p>
            <p class="card-text">Stock ${product.stock}</p>
            <a href="#" class="btn btn-dark">Ver detalle</a>
            
          </div>
      
    </div>
     
    )
}

export default Item