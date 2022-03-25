import React from "react"
import { getProducts } from "../../asyncmok"
import { useState, useEffect } from "react"

const ItemListContainer = ({gretting}) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
      getProducts().then(response => {
        setProducts(response)
      })
    },[])

    return(
      <div>
        <h1 class="text-center mt-3 btn-outline-dark p-3">
          {gretting}
      
        </h1>
        <ul class="text-center mt-3">
          {products.map(products => <li key={products.id}>{products.name}</li>)} 
        </ul>
      </div>
     
    )
}

export default ItemListContainer