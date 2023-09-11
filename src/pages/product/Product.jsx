import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Product = (props) => {
  const { id, jewelryName, jewelryImage, price, description } = props.data;
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={jewelryImage} className="card-img-top" alt={jewelryName} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{jewelryName}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <button
          className="button button1 position-relative"
          onClick={() => addToCart(id)}
        >
          Buy Now
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
      </div>
    </div>
  );
};
