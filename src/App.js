import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import products from "./data/products.json";
import { HashRouter } from "react-router-dom";

class App extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            products: products,
            cart: {
                items: [],
                total: 0,
            },
        };
    }

    handleBuy = (product) => {
        // Copying cart from current state
        const cart = { ...this.state.cart };

        /* START - Adjusting array of cart.items */
        // Copying cart.items from current state
        const cartItems = [...this.state.cart.items];

        // If an item isn't already in cart, create one; otherwise copy from current state
        if (cartItems.filter((p) => p.productID === product.id).length !== 1) {
            cartItems.push({
                cartID: cartItems.length,
                productID: product.id,
                quantity: 0,
            });
        } else {
            const index = cartItems.filter((p) => p.productID === product.id)[0]
                .cartID;
            cartItems[index] = {
                ...this.state.cart.items[index],
            };
        }

        // Determine index of cartItem
        const index = cartItems.filter((p) => p.productID === product.id)[0]
            .cartID;

        // Increment quantity of cartItem
        cartItems[index].quantity++;

        // Replace old items array with new one
        cart.items = cartItems;
        /* END - Adjusting array of cart.items */

        /* START - Adjusting value of cart.total */
        // Copying cart.total from current state
        let cartTotal = this.state.cart.total;

        // Increase cartTotal by price of bought product
        cartTotal += product.price;

        // Replace old total value with new one
        cart.total = cartTotal;
        /* END - Adjusting value of cart.total */

        // Setting the new state
        this.setState({ cart: cart });
    };

    handleFavorite = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...product };

        if (products[index].isFavorite) products[index].isFavorite = false;
        else products[index].isFavorite = true;

        this.setState({ products });
    };

    render() {
        const { products, cart } = this.state;

        return (
            <div className="App">
                <HashRouter>
                    <Navbar
                        cartItemsCount={cart.items
                            .map((item) => item.quantity)
                            .reduce((prev, next) => prev + next, 0)}
                    />
                    <Content
                        products={products}
                        cart={cart}
                        onBuy={this.handleBuy}
                        onFavorite={this.handleFavorite}
                    />
                </HashRouter>
            </div>
        );
    }
}

export default App;
