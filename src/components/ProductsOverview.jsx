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
        buyProductInterface,
        onIncrementProduct,
        onFavorite,
        onSort,
        onSliderChange,
        onTogglePopup,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
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
                    favorites={favorites}
                    currency={currency}
                    buyProductInterface={buyProductInterface}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                    onTogglePopup={onTogglePopup}
                    onInterfaceIncrementQuantity={onInterfaceIncrementQuantity}
                    onInterfaceDecrementQuantity={onInterfaceDecrementQuantity}
                    onInterfaceReset={onInterfaceReset}
                    onInterfaceSelectChange={onInterfaceSelectChange}
                />
            ) : null}
        </div>
    );
}

export default ProductsOverview;
