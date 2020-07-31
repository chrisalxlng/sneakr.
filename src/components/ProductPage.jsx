import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function ProductPage(props) {
    const { product, currency, onFavorite, onIncrementProduct } = props;
    const { description, materials, cleaning } = product;

    return (
        <div>
            <h1>Product Page</h1>
            <ul>
                {description.map((item) => {
                    return <li key={description.indexOf(item)}>{item}</li>;
                })}
            </ul>
            <p>{materials}</p>
            <p>{cleaning}</p>
            <BuyProductInterface
                product={product}
                image={product["image-large"]}
                currency={currency}
                onFavorite={onFavorite}
                onIncrementProduct={onIncrementProduct}
            />
        </div>
    );
}

export default ProductPage;
