import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div className="nav">
            <div className="nav__links">
                <NavLink to="/">
                    <span className="nav__logo">
                        sneakr<span>.</span>
                    </span>
                </NavLink>
                <NavLink to="/">
                    <span className="nav__link">Home</span>
                </NavLink>
                <NavLink to="/products">
                    <span className="nav__link">Products</span>
                </NavLink>
                <NavLink to="/categories/sale">
                    <span className="nav__link">Sale</span>
                </NavLink>
                <NavLink to="/categories">
                    <span className="nav__link">Categories</span>
                </NavLink>
            </div>

            <div className="nav__links">
                <NavLink to="/favorites">
                    <img
                        className="nav__icon"
                        src="/icons/heart.svg"
                        alt="Favorites"
                    />
                </NavLink>

                <NavLink to="/cart">
                    <div className="nav__cart">
                        <img
                            className="nav__icon"
                            src="/icons/cart.svg"
                            alt="Cart"
                        />
                        <div className="nav__item-indicator">
                            <p>
                                {props.cartItemsCount < 100
                                    ? props.cartItemsCount
                                    : 99}
                            </p>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
