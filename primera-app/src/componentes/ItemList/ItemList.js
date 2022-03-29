import Item from "../Item/Item"
import React from "react"

const ItemList = ({ products }) => {

    return (
        <ul class="list-group list-group-horizontal">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </ul>
    )
}

export default ItemList