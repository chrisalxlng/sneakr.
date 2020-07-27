import React, { Component } from "react";
import { render } from "@testing-library/react";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            product: props.product,
            onFavorite: props.onFavorite,
            onIncrementProduct: props.onIncrementProduct,
        };
    }

    handleIncrementQuantity = () => {
        // Copying quantity from current state
        const state = { ...this.state };

        // Increment quantity
        state.quantity++;

        // Setting the new state
        this.setState(state);
    };

    handleDecrementQuantity = () => {
        // Copying quantity from current state
        const state = { ...this.state };

        // If quantity > 1, decrement quantity
        if (state.quantity > 1) state.quantity--;

        // Setting the new state
        this.setState(state);
    };

    handleResetQuantity = () => {
        // Copying quantity from current state
        const state = { ...this.state };

        // Increment quantity
        state.quantity = 1;

        // Setting the new state
        this.setState(state);
    };

    render() {
        const { product, onFavorite, onIncrementProduct } = this.state;
        const { name, price } = product;
        const { quantity } = this.state;

        return (
            <div>
                <h1>Product Page</h1>
                <p>{name}</p>
                <p>{price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={this.handleIncrementQuantity}>+</button>
                <button onClick={this.handleDecrementQuantity}>-</button>
                <button
                    onClick={() => {
                        onIncrementProduct(product, quantity);
                        this.handleResetQuantity();
                    }}
                >
                    Add to cart
                </button>
                <button onClick={() => onFavorite(product)}>Favorite</button>
            </div>
        );
    }
}

export default ProductPage;
