import React from "react";
import CartItem from "./CartItem";

function ShoppingCart(props) {
    const { products } = props;
    const { items, total } = props.cart;

    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.map((item) => {
                return (
                    <CartItem
                        key={item.productID}
                        item={item}
                        product={
                            products.filter((p) => p.id === item.productID)[0]
                        }
                    />
                );
            })}
            <h3>Total: {total.toFixed(2)}</h3>
        </div>
    );
}

export default ShoppingCart;
