import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";

function Content(props) {
    const { products, onBuy, onFavorite } = props;

    return (
        <div>
            <Route
                exact
                path="/"
                component={() => (
                    <Home
                        products={products}
                        onBuy={onBuy}
                        onFavorite={onFavorite}
                    />
                )}
            />
            <Route path="/cart" component={ShoppingCart} />
        </div>
    );
}

export default Content;
