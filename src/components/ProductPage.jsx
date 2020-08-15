import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function ProductPage(props) {
    const {
        product,
        favorites,
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
            <h1>{product.name}</h1>
            <div>
                <BuyProductInterface
                    product={product}
                    favorites={favorites}
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
            <ul>
                {description.map((item) => {
                    return <li key={description.indexOf(item)}>{item}</li>;
                })}
            </ul>
            <p>{materials}</p>
            <p>{cleaning}</p>
        </div>
    );
}

export default ProductPage;
