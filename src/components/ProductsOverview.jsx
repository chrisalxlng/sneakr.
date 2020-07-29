import React from "react";
import ProductCardContainer from "./ProductCardContainer";

function ProductsOverview(props) {
    const { products, categorie, onIncrementProduct, onFavorite } = props;

    return (
        <div>
            <h2>{categorie}</h2>
            <ProductCardContainer
                products={products}
                onIncrementProduct={onIncrementProduct}
                onFavorite={onFavorite}
            />
        </div>
    );
}

export default ProductsOverview;
