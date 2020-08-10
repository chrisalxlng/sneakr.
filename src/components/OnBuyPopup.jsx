import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import BuyProductInterface from "./BuyProductInterface";

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

function OnBuyPopup(props) {
    const {
        product,
        currency,
        onFavorite,
        onIncrementProduct,
        onTogglePopup,
    } = props;

    return ReactDom.createPortal(
        <PopupBackground onClick={onTogglePopup}>
            <Popup onClick={(event) => event.stopPropagation()}>
                <BuyProductInterface
                    product={product}
                    image={product["image-small"]}
                    currency={currency}
                    onFavorite={onFavorite}
                    onIncrementProduct={onIncrementProduct}
                />
            </Popup>
        </PopupBackground>,
        document.getElementById("portal")
    );
}

export default OnBuyPopup;
