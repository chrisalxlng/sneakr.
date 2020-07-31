import React, { Component } from "react";

class BuyProductInterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            selectedValue: props.product.sizes[0],
            product: props.product,
            image: props.image,
            currency: props.currency,
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
        const {
            product,
            image,
            currency,
            onFavorite,
            onIncrementProduct,
            quantity,
            selectedValue,
        } = this.state;
        const { name, price, sale, sizes } = product;

        return (
            <div>
                <img src={"/img/" + image + ".jpg"} alt="Product" />
                <p>{name}</p>
                {sale ? (
                    <p className="sale-strike-through">{price + currency}</p>
                ) : (
                    <p>{price + currency}</p>
                )}
                {sale ? <p className="sale">{sale + currency}</p> : null}
                <label htmlFor="sizes-select">Select a size:</label>
                <select
                    onChange={this.handleChange}
                    name="sizes"
                    id="sizes-select"
                >
                    {sizes.map((item) => (
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

export default BuyProductInterface;
