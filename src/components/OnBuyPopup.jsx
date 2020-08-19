import React from "react";
import ReactDom from "react-dom";
import BuyProductInterface from "./BuyProductInterface";

function OnBuyPopup(props) {
    const {
        product,
        favorites,
        currency,
        buyProductInterface,
        onFavorite,
        onIncrementProduct,
        onTogglePopup,
        onInterfaceIncrementQuantity,
        onInterfaceDecrementQuantity,
        onInterfaceReset,
        onInterfaceSelectChange,
    } = props;

    return ReactDom.createPortal(
        <div className="popup__bg" onClick={onTogglePopup}>
            <div className="popup" onClick={(event) => event.stopPropagation()}>
                <h1 className="text-styles text-styles--h1">{product.name}</h1>
                <div>
                    <BuyProductInterface
                        product={product}
                        favorites={favorites}
                        image={product["image-small"]}
                        currency={currency}
                        buyProductInterface={buyProductInterface}
                        onFavorite={onFavorite}
                        onIncrementProduct={onIncrementProduct}
                        onInterfaceIncrementQuantity={
                            onInterfaceIncrementQuantity
                        }
                        onInterfaceDecrementQuantity={
                            onInterfaceDecrementQuantity
                        }
                        onInterfaceReset={onInterfaceReset}
                        onInterfaceSelectChange={onInterfaceSelectChange}
                    />
                </div>
                <button
                    className="btn btn--circular popup__close-btn"
                    onClick={onTogglePopup}
                >
                    <img src="/icons/cancel.svg" alt="Cancel" />
                </button>
            </div>
        </div>,
        document.getElementById("portal")
    );
}

export default OnBuyPopup;
