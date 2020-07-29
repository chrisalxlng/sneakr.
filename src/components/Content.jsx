import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";
import ProductPage from "./ProductPage";
import ProductsOverview from "./ProductsOverview";

function Content(props) {
    const {
        products,
        cart,
        favorites,
        categories,
        onIncrementProduct,
        onDecrementProduct,
        onFavorite,
        onRemoveProduct,
        onRemoveAllProducts,
    } = props;

    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <Home
                            products={products}
                            categories={categories}
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
                    path="/products"
                    component={() => (
                        <ProductsOverview
                            categorie="All Products"
                            products={products}
                            onIncrementProduct={onIncrementProduct}
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
                <Route
                    path="/:categorie"
                    render={(routerProps) => (
                        <ProductsOverview
                            categorie={
                                categories.filter(
                                    (c) =>
                                        c === routerProps.match.params.categorie
                                )[0]
                            }
                            products={products.filter((product) =>
                                product.categories.includes(
                                    categories.filter(
                                        (c) =>
                                            c ===
                                            routerProps.match.params.categorie
                                    )[0]
                                )
                            )}
                            onIncrementProduct={onIncrementProduct}
                            onFavorite={onFavorite}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default Content;
