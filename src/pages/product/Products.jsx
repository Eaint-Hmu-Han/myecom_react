import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";

const Products = () => {
  return (
    <div className="products">
      <div className="products-title">
        <h1 style={{ textAlign: "center" }}>Jewelry</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col, products-list d-flex flex-wrap gap-2">
            {PRODUCTS.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </div>
          <div className="col"></div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Products;
