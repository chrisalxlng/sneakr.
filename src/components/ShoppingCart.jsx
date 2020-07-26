import React from "react";
import CartItem from "./CartItem";

function ShoppingCart(props) {
    const {
        products,
        onIncrementProduct,
        onDecrementProduct,
        onRemoveProduct,
        onRemoveAllProducts,
    } = props;
    const { items, total } = props.cart;

    return (
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={() => onRemoveAllProducts()}>
                Remove all items
            </button>
            {items.map((item) => {
                return (
                    <CartItem
                        key={item.productID}
                        item={item}
                        product={
                            products.filter((p) => p.id === item.productID)[0]
                        }
                        onIncrementProduct={onIncrementProduct}
                        onDecrementProduct={onDecrementProduct}
                        onRemoveProduct={onRemoveProduct}
                    />
                );
            })}
            <h3>Total: {total.toFixed(2).replace("-0", "0")}</h3>
        </div>
    );
}

export default ShoppingCart;
