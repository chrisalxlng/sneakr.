import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import OnBuyPopup from "./OnBuyPopup";

function ProductsOverview(props) {
    const {
        products,
        favorites,
        categorie,
        currency,
        displayedProducts,
        productsSortBy,
        productsFilterSliderValues,
        popupOnBuyProduct,
        onIncrementProduct,
        onFavorite,
        onSort,
        onSliderChange,
        onTogglePopup,
    } = props;

    // Prevent scrolling of app if popup is open
    if (popupOnBuyProduct.showPopup) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <div>
            <h2>{categorie}</h2>
            <ProductCardContainer
                products={products.filter((product) =>
                    displayedProducts.includes(product.id)
                )}
                favorites={favorites}
                currency={currency}
                productsSortBy={productsSortBy}
                productsFilterSliderValues={productsFilterSliderValues}
                onTogglePopup={onTogglePopup}
                onFavorite={onFavorite}
                onSort={onSort}
                onSliderChange={onSliderChange}
            />
            {popupOnBuyProduct.showPopup ? (
                <OnBuyPopup
                    product={popupOnBuyProduct.product}
                    currency={currency}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                    onTogglePopup={onTogglePopup}
                />
            ) : null}
        </div>
    );
}

export default ProductsOverview;
