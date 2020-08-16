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
            <div className="product-info">
                <h2>More information</h2>
                <div className="product-info__grid">
                    <div className="product-info__element">
                        <h3>Description:</h3>
                        <ul>
                            {description.map((item) => {
                                return (
                                    <li key={description.indexOf(item)}>
                                        - {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="product-info__element">
                        <h3>Materials:</h3>
                        <p>{materials}</p>
                    </div>
                    <div className="product-info__element">
                        <h3>How to clean:</h3>
                        <p>{cleaning}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
