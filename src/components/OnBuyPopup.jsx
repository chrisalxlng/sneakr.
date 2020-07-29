import React from "react";
import BuyProductInterface from "./BuyProductInterface";

function onBuyPopup(props) {
    const { product, onFavorite, onIncrementProduct } = props;

    return (
        <div className="popup-bg">
            <div className="popup">
                <BuyProductInterface
                    product={product}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                />
            </div>
        </div>
    );
}

export default onBuyPopup;
