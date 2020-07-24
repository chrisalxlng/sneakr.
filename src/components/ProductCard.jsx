import React from "react";

function ProductCard(props) {
    const { product } = props;
    const { name, price } = product;

    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => props.onIncrement(product)}>Buy</button>
        </div>
    );
}

export default ProductCard;
