import React, { Component } from "react";

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            selectedValue: props.product.colors[0],
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

        // Setting quantity to 1
        state.quantity = 1;

        // Setting the new state
        this.setState(state);
    };

    handleChange = (event) => {
        // Setting the state with the new selected value
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { product, onFavorite, onIncrementProduct } = this.state;
        const { name, price, colors } = product;
        const { quantity, selectedValue } = this.state;

        return (
            <div>
                <h1>Product Page</h1>
                <p>{name}</p>
                <p>{price}</p>
                <label htmlFor="colors-select">Select a color:</label>
                <select
                    onChange={this.handleChange}
                    name="colors"
                    id="colors-select"
                >
                    {colors.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <p>Quantity: {quantity}</p>
                <button onClick={this.handleIncrementQuantity}>+</button>
                <button onClick={this.handleDecrementQuantity}>-</button>
                <button
                    onClick={() => {
                        onIncrementProduct(product, selectedValue, quantity);
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
