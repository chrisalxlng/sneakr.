import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";

function Content(props) {
    const {
        products,
        cart,
        favorites,
        onProductIncrement,
        onProductDecrement,
        onFavorite,
        onProductRemove,
    } = props;

    return (
        <div>
            <Route
                exact
                path="/"
                component={() => (
                    <Home
                        products={products}
                        onProductIncrement={onProductIncrement}
                        onFavorite={onFavorite}
                    />
                )}
            />
            <Route
                path="/cart"
                component={() => (
                    <ShoppingCart
                        products={products}
                        cart={cart}
                        onProductIncrement={onProductIncrement}
                        onProductDecrement={onProductDecrement}
                        onProductRemove={onProductRemove}
                    />
                )}
            />
            <Route
                path="/favorites"
                component={() => (
                    <Favorites
                        products={products}
                        favorites={favorites}
                        onFavorite={onFavorite}
                    />
                )}
            />
        </div>
    );
}

export default Content;
