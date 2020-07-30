import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function onBuyPopup(props) {
    const { product, currency, onFavorite, onIncrementProduct } = props;

    return (
        <div className="popup-bg">
            <div className="popup">
                <BuyProductInterface
                    product={product}
                    currency={currency}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                />
            </div>
        </div>
    );
}

export default onBuyPopup;
