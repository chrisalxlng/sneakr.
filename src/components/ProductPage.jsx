import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function ProductPage(props) {
    const {
        product,
        currency,
        buyProductInterface,
        onFavorite,
        onIncrementProduct,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
    } = props;
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
                buyProductInterface={buyProductInterface}
                onFavorite={onFavorite}
                onIncrementProduct={onIncrementProduct}
                onInterfaceIncrementQuantity={onInterfaceIncrementQuantity}
                onInterfaceDecrementQuantity={onInterfaceDecrementQuantity}
                onInterfaceReset={onInterfaceReset}
                onInterfaceSelectChange={onInterfaceSelectChange}
            />
        </div>
    );
}

export default ProductPage;
