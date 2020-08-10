import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const PopupBackground = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Popup = styled.div`
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    overflow: scroll;
    border-radius: 10px;
    width: 75vw;
    height: 75vh;
`;

function OnCheckoutPopup(props) {
    const { products, cart, showPopup, onTogglePopup } = props;

    // Prevent scrolling of app if popup is open
    if (showPopup) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return ReactDom.createPortal(
        <PopupBackground onClick={onTogglePopup}>
            <Popup onClick={(event) => event.stopPropagation()}>
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
            </Popup>
        </PopupBackground>,
        document.getElementById("portal")
    );
}

export default OnCheckoutPopup;
