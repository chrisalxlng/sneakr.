import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";
import ProductPage from "./ProductPage";

function Content(props) {
    const {
        products,
        cart,
        favorites,
        onIncrementProduct,
        onDecrementProduct,
        onFavorite,
        onRemoveProduct,
        onRemoveAllProducts,
    } = props;

    return (
        <div>
            <Route
                exact
                path="/"
                component={() => (
                    <Home
                        products={products}
                        onIncrementProduct={onIncrementProduct}
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
                        onIncrementProduct={onIncrementProduct}
                        onDecrementProduct={onDecrementProduct}
                        onRemoveProduct={onRemoveProduct}
                        onRemoveAllProducts={onRemoveAllProducts}
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
            <Route
                path="/product=:productID"
                render={(routerProps) => (
                    <ProductPage
                        product={
                            products.filter(
                                (p) =>
                                    p.id.toString() ===
                                    routerProps.match.params.productID.toString()
                            )[0]
                        }
                        onFavorite={onFavorite}
                        onIncrementProduct={onIncrementProduct}
                    />
                )}
            />
        </div>
    );
}

export default Content;
