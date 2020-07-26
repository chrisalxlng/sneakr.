import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";

function Content(props) {
    const { products, cart, favorites, onBuy, onFavorite } = props;

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
            <Route
                path="/cart"
                component={() => (
                    <ShoppingCart products={products} cart={cart} />
                )}
            />
            <Route
                path="/favorites"
                component={() => (
                    <Favorites products={products} favorites={favorites} />
                )}
            />
        </div>
    );
}

export default Content;
