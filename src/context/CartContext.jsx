import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext(null)

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => { console.log(cartItems) }, [cartItems])

    const addToCart = (id) => {
        const item = cartItems.find(item => item.id === id)
        if(!item) {
            setCartItems([...cartItems, {id, count: 1}])
        } else {
            const updatedCart = cartItems.map(eachItem => {
                if(eachItem.id === id) {
                    return {
                        ...eachItem,
                        count: eachItem.count + 1
                    }
                }
                return eachItem
            })
            setCartItems(updatedCart)
        }
    }

    const removeFromCart = (id) => {
        const item = cartItems.find(item => item.id === id)
        if(item) {
            let updatedCart;
            if(item.count === 1) {
                updatedCart = cartItems.filter(item => item.id !== id)
            } else {
                updatedCart = cartItems.map(eachItem => {
                    if(eachItem.id === id) {
                        return {
                            ...eachItem,
                            count: eachItem.count - 1
                        }
                    }
                    return eachItem
                })
            }
            setCartItems(updatedCart)
        }
    }

    const updateCartItemCount = (count, id) => {
        const item = cartItems.find(item => item.id === id)
        if(item) {
            let updatedCart;
            if(count === 0) {
                updatedCart = cartItems.filter(item => item.id !== id)
            } else {
                updatedCart = cartItems.map(eachItem => {
                    if(eachItem.id === id) {
                        return {
                            ...eachItem,
                            count: count
                        }
                    }
                    return eachItem
                })
            }
            setCartItems(updatedCart)
        }
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount }

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}