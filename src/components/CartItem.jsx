import React from "react";
import { Link } from "react-router-dom";

function CartItem(props) {
    const {
        item,
        product,
        currency,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
    } = props;
    const { quantity, selectedValue } = item;
    const { id, name, price, sale } = product;

    return (
        <div>
            <p>{quantity}</p>
            <Link to={`/product=${id}`}>
                <p>{name}</p>
            </Link>
            <p>{selectedValue}</p>
            {sale ? (
                <p className="sale-strike-through">
                    {(price * quantity).toFixed(2) + currency}
                </p>
            ) : (
                <p>{(price * quantity).toFixed(2) + currency}</p>
            )}
            {sale ? (
                <p className="sale">
                    {(sale * quantity).toFixed(2) + currency}
                </p>
            ) : null}
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
