import React from "react"
import {Link} from 'react-router-dom'


const Item = ({product}) => {

    return(
      <div className="container">
          <div className="card-body text-center">
            <h6 className="card-title">{product.name}</h6>
               <img src={product.img} className="card-img-top"  /> 
            <p className="card-text">Precio: ${product.precio}</p>
            <p className="card-text">Stock {product.stock}</p>
            <Link to={`/detail/${product.id}`}  className="btn btn-dark">Ver detalle</Link>
            
          </div>
      
    </div>
     
    )
}

export default Item