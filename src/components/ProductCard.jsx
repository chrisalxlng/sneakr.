import React from "react";

function ProductCard(props) {
    const { product, onBuy, onFavorite } = props;
    const { name, price } = product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onBuy(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
