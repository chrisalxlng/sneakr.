import React from "react";

function CartItem(props) {
    const { quantity, name, price } = props.cartItem;

    return (
        <div>
            <p>{quantity}</p>
            <p>{name}</p>
            <p>{(price * quantity).toFixed(2)}</p>
        </div>
    );
}

export default CartItem;
