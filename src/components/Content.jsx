import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import Favorites from "./Favorites";
import ProductPage from "./ProductPage";
import ProductsOverview from "./ProductsOverview";

const Wrapper = styled.div`
    padding: 0 40px;
    padding-top: 50px;
    background-color: #f5f4f4;
`;

function Content(props) {
    const {
        products,
        cart,
        favorites,
        categories,
        currency,
        displayedProducts,
        productsSortBy,
        productsFilterSliderValues,
        popupOnBuyProduct,
        buyProductInterface,
        onIncrementProduct,
        onDecrementProduct,
        onFavorite,
        onRemoveProduct,
        onRemoveAllProducts,
        onSort,
        onSliderChange,
        onTogglePopup,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
    } = props;

    return (
        <Wrapper>
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
                            currency={currency}
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
                            currency={currency}
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
                            favorites={favorites}
                            currency={currency}
                            displayedProducts={displayedProducts}
                            productsSortBy={productsSortBy}
                            productsFilterSliderValues={
                                productsFilterSliderValues
                            }
                            popupOnBuyProduct={popupOnBuyProduct}
                            buyProductInterface={buyProductInterface}
                            onIncrementProduct={onIncrementProduct}
                            onFavorite={onFavorite}
                            onSort={onSort}
                            onSliderChange={onSliderChange}
                            onTogglePopup={onTogglePopup}
                            onInterfaceIncrementQuantity={
                                onInterfaceIncrementQuantity
                            }
                            onInterfaceDecrementQuantity={
                                onInterfaceDecrementQuantity
                            }
                            onInterfaceReset={onInterfaceReset}
                            onInterfaceSelectChange={onInterfaceSelectChange}
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
                            currency={currency}
                            favorites={favorites}
                            buyProductInterface={buyProductInterface}
                            onFavorite={onFavorite}
                            onIncrementProduct={onIncrementProduct}
                            onInterfaceIncrementQuantity={
                                onInterfaceIncrementQuantity
                            }
                            onInterfaceDecrementQuantity={
                                onInterfaceDecrementQuantity
                            }
                            onInterfaceReset={onInterfaceReset}
                            onInterfaceSelectChange={onInterfaceSelectChange}
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
                            favorites={favorites}
                            currency={currency}
                            displayedProducts={displayedProducts}
                            productsSortBy={productsSortBy}
                            productsFilterSliderValues={
                                productsFilterSliderValues
                            }
                            popupOnBuyProduct={popupOnBuyProduct}
                            buyProductInterface={buyProductInterface}
                            onIncrementProduct={onIncrementProduct}
                            onFavorite={onFavorite}
                            onSort={onSort}
                            onSliderChange={onSliderChange}
                            onTogglePopup={onTogglePopup}
                            onInterfaceIncrementQuantity={
                                onInterfaceIncrementQuantity
                            }
                            onInterfaceDecrementQuantity={
                                onInterfaceDecrementQuantity
                            }
                            onInterfaceReset={onInterfaceReset}
                            onInterfaceSelectChange={onInterfaceSelectChange}
                        />
                    )}
                />
            </Switch>
        </Wrapper>
    );
}

export default Content;
