import React, { Component } from "react";
import CartItem from "./CartItem";
import OnCheckoutPopup from "./OnCheckoutPopup";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            cart: props.cart,
            currency: props.currency,
            onIncrementProduct: props.onIncrementProduct,
            onDecrementProduct: props.onDecrementProduct,
            onRemoveProduct: props.onRemoveProduct,
            onRemoveAllProducts: props.onRemoveAllProducts,
            showPopup: false,
        };
    }

    handleTogglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup,
        });
    };

    render() {
        const {
            products,
            cart,
            currency,
            onIncrementProduct,
            onDecrementProduct,
            onRemoveProduct,
            onRemoveAllProducts,
            showPopup,
        } = this.state;
        const { items, total } = cart;

        return (
            <div>
                <h2>Shopping Cart</h2>
                <button onClick={() => onRemoveAllProducts()}>
                    Remove all items
                </button>
                {items.map((item) => {
                    return (
                        <CartItem
                            key={item.cartID}
                            item={item}
                            product={
                                products.filter(
                                    (p) => p.id === item.productID
                                )[0]
                            }
                            currency={currency}
                            onIncrementProduct={onIncrementProduct}
                            onDecrementProduct={onDecrementProduct}
                            onRemoveProduct={onRemoveProduct}
                        />
                    );
                })}
                <h3>Total: {total.toFixed(2).replace("-0", "0") + currency}</h3>
                <button
                    onClick={() => {
                        this.handleTogglePopup();
                        //onRemoveAllProducts();
                    }}
                >
                    Checkout
                </button>
                {showPopup ? (
                    <OnCheckoutPopup
                        products={products.filter((product) =>
                            items
                                .map((item) => item.productID)
                                .includes(product.id)
                        )}
                        cart={cart}
                    />
                ) : null}
            </div>
        );
    }
}

export default ShoppingCart;
