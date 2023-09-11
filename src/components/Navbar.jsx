import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-pink">
      <div className="container-fluid">
        <a className="navbar-brand">
          <i class="fa fa-fw fa-home"></i>Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={"nav-link " + (pathname === "/" && "active fw-bold")}
                aria-current="page"
              >
                Jewelry
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={
                  "nav-link " + (pathname === "/cart" && "active fw-bold")
                }
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge bg-secondary">{totalItemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
