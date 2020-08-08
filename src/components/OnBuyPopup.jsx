import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function OnBuyPopup(props) {
    const { product, currency, onFavorite, onIncrementProduct } = props;

    return (
        <div className="popup-bg">
            <div className="popup">
                <BuyProductInterface
                    product={product}
                    image={product["image-small"]}
                    currency={currency}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                />
            </div>
        </div>
    );
}

export default OnBuyPopup;
