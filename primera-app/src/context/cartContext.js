import { createContext, useState } from "react";

const Context = createContext ()

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const addItem = (product,quantity) => {
        
        const objItemcart = {
            ...product,
            quantity
        }
        
        setCart([...cart,objItemcart])
    }

    const clearCart = () =>{
        setCart([])
    }

    return(
        <Context.Provider value={{
            cart, 
            addItem,
            clearCart
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context