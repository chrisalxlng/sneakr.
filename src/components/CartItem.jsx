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
    const { quantity, selectedValue } = item;
    const { id, name, price } = product;

    return (
        <div>
            <p>{quantity}</p>
            <NavLink to={`/product=${id}`}>
                <p>{name}</p>
            </NavLink>
            <p>{selectedValue}</p>
            <p>{(price * quantity).toFixed(2)}</p>
            <button onClick={() => onIncrementProduct(product, selectedValue)}>
                +
            </button>
            <button onClick={() => onDecrementProduct(product, selectedValue)}>
                -
            </button>
            <button onClick={() => onRemoveProduct(product, selectedValue)}>
                Remove
            </button>
        </div>
    );
}

export default CartItem;
