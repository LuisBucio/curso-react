import React from "react"
import { getProducts } from "../../asyncmok"
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom' 

const ItemListContainer = ({gretting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProducts(categoryId).then(items => {
            setProducts(items)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })          
    }, [categoryId])
    

    return(
      <div className="ItemListContainer">
        {/* <h1 className="text-center mt-3 btn-outline-dark p-3">
          {gretting}
      
        </h1>
        <ul className="text-center mt-3">
          {products.map(product => <li key={product.id}>{product.name}</li>)} 
        </ul> */}
        
         <ItemList products={products}/>
         
       
      </div>
     
    )
}

export default ItemListContainer