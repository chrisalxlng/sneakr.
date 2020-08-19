import React from "react";
import ReactDom from "react-dom";

function OnCheckoutPopup(props) {
    const { products, cart, showPopup, onTogglePopup } = props;

    // Prevent scrolling of app if popup is open
    if (showPopup) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return ReactDom.createPortal(
        <div className="popup__bg" onClick={onTogglePopup}>
            <div className="popup" onClick={(event) => event.stopPropagation()}>
                <h1 className="text-styles text-styles--h1">
                    Checkout successful!
                </h1>
                <p>You have bought:</p>
                <ul>
                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                                <p>{product.name}</p>
                                <p>
                                    {
                                        cart.items
                                            .filter(
                                                (item) =>
                                                    item.productID ===
                                                    product.id
                                            )
                                            .map((item) => item.quantity)[0]
                                    }
                                </p>
                            </li>
                        );
                    })}
                </ul>
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

export default OnCheckoutPopup;
