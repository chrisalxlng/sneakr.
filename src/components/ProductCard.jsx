import React from "react";

function ProductCard(props) {
    const { product, onProductIncrement, onFavorite } = props;
    const { name, price } = product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onProductIncrement(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
