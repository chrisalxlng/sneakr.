import React from "react";
import { NavLink } from "react-router-dom";

function CartItem(props) {
    const {
        item,
        product,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
    } = props;
    const { quantity } = item;
    const { id, name, price } = product;

    return (
        <div>
            <p>{quantity}</p>
            <NavLink to={`/product=${id}`}>
                <p>{name}</p>
            </NavLink>
            <p>{(price * quantity).toFixed(2)}</p>
            <button onClick={() => onIncrementProduct(product)}>+</button>
            <button onClick={() => onDecrementProduct(product)}>-</button>
            <button onClick={() => onRemoveProduct(product)}>Remove</button>
        </div>
    );
}

export default CartItem;
