import React from "react";

function CartItem(props) {
    const {
        item,
        product,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
    } = props;
    const { quantity } = item;
    const { name, price } = product;

    return (
        <div>
            <p>{quantity}</p>
            <p>{name}</p>
            <p>{(price * quantity).toFixed(2)}</p>
            <button onClick={() => onIncrementProduct(product)}>+</button>
            <button onClick={() => onDecrementProduct(product)}>-</button>
            <button onClick={() => onRemoveProduct(product)}>Remove</button>
        </div>
    );
}

export default CartItem;
