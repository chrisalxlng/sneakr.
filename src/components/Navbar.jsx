import React from "react";
import { NavLink } from "react-router-dom";

const closeNavbar = () => {
    const checkbox = document.getElementById("hamburger");
    if (checkbox.checked) checkbox.checked = false;
};

function Navbar(props) {
    return (
        <nav className="nav">
            <div className="nav__links">
                <input
                    className="nav__hamburger-checkbox"
                    id="hamburger"
                    type="checkbox"
                />
                <label className="nav__hamburger-icon" htmlFor="hamburger">
                    <img
                        className="nav__hamburger-img"
                        src="/icons/left-alignment.svg"
                        alt=""
                    />
                </label>

                <NavLink
                    onClick={closeNavbar}
                    className="nav__logo-link"
                    to="/"
                >
                    <span className="nav__logo">
                        sneakr<span>.</span>
                    </span>
                </NavLink>
                <div className="nav__links nav__text-links">
                    <NavLink onClick={closeNavbar} to="/">
                        <span className="nav__link">Home</span>
                    </NavLink>
                    <NavLink onClick={closeNavbar} to="/categories">
                        <span className="nav__link">Categories</span>
                    </NavLink>
                    <NavLink onClick={closeNavbar} to="/products">
                        <span className="nav__link">Products</span>
                    </NavLink>
                    <NavLink onClick={closeNavbar} to="/categories/sale">
                        <span className="nav__link">Sale</span>
                    </NavLink>
                </div>
            </div>
            <div className="nav__links">
                <NavLink onClick={closeNavbar} to="/favorites">
                    <img
                        className="nav__icon"
                        src="/icons/heart.svg"
                        alt="Favorites"
                    />
                </NavLink>

                <NavLink onClick={closeNavbar} to="/cart">
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
        </nav>
    );
}

export default Navbar;
