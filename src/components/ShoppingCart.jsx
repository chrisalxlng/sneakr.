import React, { Component } from "react";
import CartItem from "./CartItem";
import OnCheckoutPopup from "./OnCheckoutPopup";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            cartItemsCount,
            currency,
            onIncrementProduct,
            onDecrementProduct,
            onRemoveProduct,
            onRemoveAllProducts,
            showPopup,
        } = this.props;
        const { items, total } = cart;

        return (
            <div className="shopping-cart">
                <h2>Shopping Cart</h2>
                <div className="shopping-cart__card-checkout-container">
                    <div>
                        <div className="shopping-cart__items-count-remove-container">
                            <h3>
                                {cartItemsCount}{" "}
                                {cartItemsCount > 1 ? "Items" : "Item"}
                            </h3>
                            <button
                                className="btn btn--icon-text"
                                onClick={() => onRemoveAllProducts()}
                            >
                                <span>Remove all items</span>
                                <img alt="Remove item" src="/icons/trash.svg" />
                            </button>
                        </div>
                        <div className="shopping-cart__item-card-container">
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
                    <div className="shopping-cart__checkout">
                        <h3>Checkout</h3>
                        <div className="shopping-cart__totals-container">
                            <div className="shopping-cart__total-value-container">
                                <p>Subotal:</p>
                                <p>
                                    {total.toFixed(2).replace("-0", "0") +
                                        currency}
                                </p>
                            </div>
                            <div className="shopping-cart__total-value-container">
                                <p>Delivery:</p>
                                <p>
                                    {(0).toFixed(2).replace("-0", "0") +
                                        currency}
                                </p>
                            </div>
                            <div className="shopping-cart__total-value-container">
                                <p className="shopping-cart__total">Total:</p>
                                <p className="shopping-cart__total">
                                    {total.toFixed(2).replace("-0", "0") +
                                        currency}
                                </p>
                            </div>
                        </div>

                        <button
                            className="btn btn--primary"
                            onClick={() => {
                                this.handleTogglePopup();
                                //onRemoveAllProducts();
                            }}
                        >
                            Buy {cartItemsCount}{" "}
                            {cartItemsCount > 1 ? "Items" : "Item"}
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
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
