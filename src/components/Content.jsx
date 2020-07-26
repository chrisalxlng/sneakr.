import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";

function Content(props) {
    const { products, cart, onBuy, onFavorite } = props;

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
                    <Favorites
                        favoriteItems={products.filter(
                            (p) => p.isFavorite === true
                        )}
                    />
                )}
            />
        </div>
    );
}

export default Content;
