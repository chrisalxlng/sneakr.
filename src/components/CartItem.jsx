import React from "react";

function CartItem(props) {
    const { quantity } = props.item;
    const { name, price } = props.product;

    console.log(props);

    return (
        <div>
            <p>{quantity}</p>
            <p>{name}</p>
            <p>{(price * quantity).toFixed(2)}</p>
        </div>
    );
}

export default CartItem;
