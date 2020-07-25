import React from "react";

function ProductCard(props) {
    const { product } = props;
    const { name, price } = product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => props.onBuy(product)}>Buy</button>
            <button onClick={() => props.onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductCard;
