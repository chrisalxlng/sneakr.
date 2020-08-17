import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
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
                            favorites={favorites}
                            currency={currency}
                            popupOnBuyProduct={popupOnBuyProduct}
                            buyProductInterface={buyProductInterface}
                            onTogglePopup={onTogglePopup}
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
                    exact
                    path="/categories"
                    component={() => (
                        <Categories
                            products={products}
                            categories={categories}
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
                            category="Favorites"
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
                            category="All Products"
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
                            products={products}
                            buyProductInterface={buyProductInterface}
                            popupOnBuyProduct={popupOnBuyProduct}
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
                            onTogglePopup={onTogglePopup}
                        />
                    )}
                />
                <Route
                    path="/:category"
                    render={(routerProps) => (
                        <ProductsOverview
                            category={
                                categories
                                    .map((category) => category.name)
                                    .filter(
                                        (c) =>
                                            c ===
                                            routerProps.match.params.category
                                    )[0]
                            }
                            products={products.filter((product) =>
                                product.categories.includes(
                                    categories
                                        .map((category) => category.name)
                                        .filter(
                                            (c) =>
                                                c ===
                                                routerProps.match.params
                                                    .category
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
