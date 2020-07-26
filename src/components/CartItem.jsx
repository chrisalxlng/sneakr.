import React from "react";

function CartItem(props) {
    const {
        item,
        product,
        onProductIncrement,
        onProductDecrement,
        onProductRemove,
    } = props;
    const { quantity } = item;
    const { name, price } = product;

    return (
        <div>
            <p>{quantity}</p>
            <p>{name}</p>
            <p>{(price * quantity).toFixed(2)}</p>
            <button onClick={() => onProductIncrement(product)}>+</button>
            <button onClick={() => onProductDecrement(product)}>-</button>
            <button onClick={() => onProductRemove(product)}>Remove</button>
        </div>
    );
}

export default CartItem;
