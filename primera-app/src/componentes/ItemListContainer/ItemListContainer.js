import React from "react"
import { getProducts } from "../../asyncmok"
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({gretting}) => {

    const [products, setProducts] = useState([])

    useEffect(() =>{
      getProducts().then(response => {
        setProducts(response)
      })
    },[])

    return(
      <div className="ItemListContainer">
        {/* <h1 class="text-center mt-3 btn-outline-dark p-3">
          {gretting}
      
        </h1>
        <ul class="text-center mt-3">
          {products.map(product => <li key={product.id}>{product.name}</li>)} 
        </ul> */}
         <ItemList products={products}/>
       
      </div>
     
    )
}

export default ItemListContainer