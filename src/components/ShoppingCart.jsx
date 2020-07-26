import React from "react";
import CartItem from "./CartItem";

function ShoppingCart(props) {
    const { cartItems } = props;

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.map((item) => {
                return <CartItem key={item.id} cartItem={item} />;
            })}
            <h3>
                Total:{" "}
                {cartItems
                    .map((item) => item.price * item.quantity)
                    .reduce((prev, next) => prev + next, 0)
                    .toFixed(2)}
            </h3>
        </div>
    );
}

export default ShoppingCart;
