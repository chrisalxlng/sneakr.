import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";
import ProductsOverview from "./ProductsOverview";

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
        <div className="content">
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
                            cartItemsCount={cart.items
                                .map((item) => item.quantity)
                                .reduce((prev, next) => prev + next, 0)}
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
                        <ProductsOverview
                            categorie="Favorites"
                            products={products.filter((product) =>
                                favorites
                                    .map((item) => item.productID)
                                    .includes(product.id)
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
        </div>
    );
}

export default Content;
