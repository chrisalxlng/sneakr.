import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function ProductPage(props) {
    const { product, currency, onFavorite, onIncrementProduct } = props;

    return (
        <div>
            <h1>Product Page</h1>
            <BuyProductInterface
                product={product}
                currency={currency}
                onFavorite={onFavorite}
                onIncrementProduct={onIncrementProduct}
            />
        </div>
    );
}

export default ProductPage;
