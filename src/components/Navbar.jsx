import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <h1>
                <NavLink to="/">Home</NavLink>
            </h1>
            <h1>
                <NavLink to="cart">Cart {props.itemsBought}</NavLink>
            </h1>
            <h1>
                <NavLink to="favorites">Favorites</NavLink>
            </h1>
        </div>
    );
}

export default Navbar;
