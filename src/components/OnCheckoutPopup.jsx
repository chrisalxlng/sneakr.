import React from "react";

function OnCheckoutPopup(props) {
    const { products, cart } = props;

    return (
        <div className="popup-bg">
            <div className="popup">
                <h2>Checkout successful!</h2>
                <p>You have bought:</p>
                <ul>
                    {products.map((product) => {
                        return (
                            <li key={product.id}>
                                <p>{product.name}</p>
                                <p>{product.quantity}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default OnCheckoutPopup;
