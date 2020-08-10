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
                />
            ) : null}
        </div>
    );
}

export default ProductsOverview;
