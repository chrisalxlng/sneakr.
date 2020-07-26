import React from "react";

function ProductCard(props) {
    const { product, onIncrementProduct, onFavorite } = props;
    const { name, price } = product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onIncrementProduct(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
