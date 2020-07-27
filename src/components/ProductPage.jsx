import React from "react";

function ProductPage(props) {
    const { product, onFavorite, onIncrementProduct } = props;
    const { name, price } = product;

    console.log(props.product);

    return (
        <div>
            <h1>Product Page</h1>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onIncrementProduct(product)}>Buy</button>
            <button onClick={() => onFavorite(product)}>Favorite</button>
        </div>
    );
}

export default ProductPage;
