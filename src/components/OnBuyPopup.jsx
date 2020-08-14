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
    background-color: #f5f4f4;
    overflow: scroll;
    border-radius: 10px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
    padding: 30px;

    h1 {
        margin-bottom: 30px;
        line-height: 20px;
    }
`;

const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    position: fixed;
    right: 15px;
    top: 15px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    cursor: pointer;

    img {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    :hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

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
        <PopupBackground onClick={onTogglePopup}>
            <Popup onClick={(event) => event.stopPropagation()}>
                <h1>{product.name}</h1>
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
                <Button onClick={onTogglePopup}>
                    <img src="/icons/cancel.svg" alt="Cancel" />
                </Button>
            </Popup>
        </PopupBackground>,
        document.getElementById("portal")
    );
}

export default OnBuyPopup;
