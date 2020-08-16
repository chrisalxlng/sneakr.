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
            <>
                <h2>Shopping Cart</h2>
                <div>
                    <div>
                        <h3>{items.length} Items</h3>
                        <button onClick={() => onRemoveAllProducts()}>
                            Remove all items
                        </button>
                    </div>
                    <div>
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
                                    image={
                                        products.filter(
                                            (p) => p.id === item.productID
                                        )[0]["image-small"]
                                    }
                                    currency={currency}
                                    onIncrementProduct={onIncrementProduct}
                                    onDecrementProduct={onDecrementProduct}
                                    onRemoveProduct={onRemoveProduct}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h3>Checkout</h3>
                    <div>
                        <div>
                            <p>Subotal:</p>
                            <p>
                                {total.toFixed(2).replace("-0", "0") + currency}
                            </p>
                        </div>
                        <div>
                            <p>Delivery:</p>
                            <p>
                                {(0).toFixed(2).replace("-0", "0") + currency}
                            </p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p>
                                {total.toFixed(2).replace("-0", "0") + currency}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            this.handleTogglePopup();
                            //onRemoveAllProducts();
                        }}
                    >
                        Buy {items.length} items
                    </button>
                    {showPopup ? (
                        <OnCheckoutPopup
                            products={products.filter((product) =>
                                items
                                    .map((item) => item.productID)
                                    .includes(product.id)
                            )}
                            cart={cart}
                            showPopup={showPopup}
                            onTogglePopup={this.handleTogglePopup}
                        />
                    ) : null}
                </div>
            </>
        );
    }
}

export default ShoppingCart;
