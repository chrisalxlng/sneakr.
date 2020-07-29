import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function ProductPage(props) {
    const { product, onFavorite, onIncrementProduct } = props;

    return (
        <div>
            <h1>Product Page</h1>
            <BuyProductInterface
                product={product}
                onFavorite={onFavorite}
                onIncrementProduct={onIncrementProduct}
            />
        </div>
    );
}

export default ProductPage;
