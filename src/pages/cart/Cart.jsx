import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { PRODUCTS } from '../../products'
import { CartItem } from './CartItem'


export const Cart = () => {
    const { cartItems } = useContext(CartContext)


    return (
        <div className="cart" style={{margin: '10px'}}>
            <div className="cart-title">
                <h3 style={{ textAlign: "center" }}>Your Cart Items</h3>
            </div>
            <div className="cart-list d-flex flex-wrap gap-2">
                {cartItems.map(item => {
                    const product = PRODUCTS.find(product => product.id === item.id)
                    return <CartItem data={product} qty={item.count} key={product.id} />
                })}
            </div>
        </div>
    )
}
