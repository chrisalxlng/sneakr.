import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import products from "./data/products.json";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            cart: {
                items: [],
                total: 0,
            },
            favorites: [],
            categories: [],
            currency: "€",
        };
    }

    componentDidMount() {
        // Copying products from current state
        const products = [...this.state.products];

        // Each product that is on sale, add the category "Sale"
        products.forEach((product) => {
            if (product.sale !== null) {
                product.categories.push("Sale");
            }
        });

        // Setting the new state
        this.setState({ products: products });

        // Merging the categorie arrays from products and removing duplicats
        const categories = [
            ...new Set(
                [].concat.apply(
                    [],
                    this.state.products.map((item) => item.categories)
                )
            ),
        ];

        // Setting the state for categories
        this.setState({ categories: categories });
    }

    handleIncrementProduct = (
        product,
        selectedValue = product.colors[0],
        quantity = 1
    ) => {
        // Copying cart from current state
        const cart = { ...this.state.cart };

        /* START - Adjusting array of cart.items */
        // Copying cart.items from current state
        const cartItems = [...this.state.cart.items];

        // If an item with the selected value isn't already in cart, create one and push it to the array; otherwise copy from current state
        if (cartItems.filter((p) => p.productID === product.id).length === 0) {
            cartItems.push({
                cartID: cartItems.length,
                productID: product.id,
                quantity: 0,
                selectedValue: selectedValue,
            });
        } else if (
            cartItems.filter((p) => p.productID === product.id).length > 0 &&
            cartItems
                .filter(
                    (p) =>
                        p.productID === product.id &&
                        p.selectedValue === selectedValue
                )
                .map((p) => p.selectedValue)[0] !== selectedValue
        ) {
            cartItems.push({
                cartID: cartItems.length,
                productID: product.id,
                quantity: 0,
                selectedValue: selectedValue,
            });
        } else {
            const index = cartItems.indexOf(
                cartItems.filter(
                    (item) =>
                        item.productID === product.id &&
                        item.selectedValue === selectedValue
                )[0]
            );
            cartItems[index] = {
                ...this.state.cart.items[index],
            };
        }

        // Determine index of cartItem
        const index = cartItems.indexOf(
            cartItems.filter(
                (item) =>
                    item.productID === product.id &&
                    item.selectedValue === selectedValue
            )[0]
        );

        // Increment quantity of cartItem
        cartItems[index].quantity += quantity;

        // Replace old items array with new one
        cart.items = cartItems;
        /* END - Adjusting array of cart.items */

        /* START - Adjusting value of cart.total */
        // Copying cart.total from current state
        let cartTotal = this.state.cart.total;

        // Increase cartTotal by price of bought product
        cartTotal += product.price * quantity;

        // Replace old total value with new one
        cart.total = cartTotal;
        /* END - Adjusting value of cart.total */

        // Setting the new state
        this.setState({ cart: cart });
    };

    handleDecrementProduct = (product, selectedValue) => {
        // Copying cart from current state
        const cart = { ...this.state.cart };

        /* START - Adjusting array of cart.items */
        // Copying cart.items from current state
        const cartItems = [...this.state.cart.items];

        // Determine index of cartItem
        const index = cartItems.indexOf(
            cartItems.filter(
                (item) =>
                    item.productID === product.id &&
                    item.selectedValue === selectedValue
            )[0]
        );

        // If an item has only one quantity in cart remaining, remove it from the array; otherwise decrement cartItem
        if (cartItems[index].quantity === 1) {
            cartItems.splice(index, 1);
        } else {
            // Decrement quantity of cartItem
            cartItems[index].quantity--;
        }

        // Replace old items array with new one
        cart.items = cartItems;
        /* END - Adjusting array of cart.items */

        /* START - Adjusting value of cart.total */
        // Copying cart.total from current state
        let cartTotal = this.state.cart.total;

        // Decrease cartTotal by price of bought product
        cartTotal -= product.price;

        // Replace old total value with new one
        cart.total = cartTotal;
        /* END - Adjusting value of cart.total */

        // Setting the new state
        this.setState({ cart: cart });
    };

    handleRemoveProduct = (product, selectedValue) => {
        // Copying cart from current state
        const cart = { ...this.state.cart };

        /* START - Adjusting array of cart.items */
        // Copying cart.items from current state
        const cartItems = [...this.state.cart.items];

        // Determine index of cartItem
        const index = cartItems.indexOf(
            cartItems.filter(
                (item) =>
                    item.productID === product.id &&
                    item.selectedValue === selectedValue
            )[0]
        );

        // Determine quantity of cartItem in cart
        const quantity = cartItems[index].quantity;

        // Remove cartItem
        cartItems.splice(index, 1);

        // Replace old items array with new one
        cart.items = cartItems;
        /* END - Adjusting array of cart.items */

        /* START - Adjusting value of cart.total */
        // Copying cart.total from current state
        let cartTotal = this.state.cart.total;

        // Decrease cartTotal by price of bought product
        cartTotal -= product.price * quantity;

        // Replace old total value with new one
        cart.total = cartTotal;
        /* END - Adjusting value of cart.total */

        // Setting the new state
        this.setState({ cart: cart });
    };

    handleRemoveAllProducts = () => {
        // Copying cart from current state
        const cart = { ...this.state.cart };

        /* START - Adjusting array of cart.items */

        // Remove cartItem
        const cartItems = [];

        // Replace old items array with new one
        cart.items = cartItems;
        /* END - Adjusting array of cart.items */

        /* START - Adjusting value of cart.total */
        // Decrease cartTotal by price of bought product
        const cartTotal = 0;

        // Replace old total value with new one
        cart.total = cartTotal;
        /* END - Adjusting value of cart.total */

        // Setting the new state
        this.setState({ cart: cart });
    };

    handleFavorite = (product) => {
        // Copying favorites from current state
        const favorites = [...this.state.favorites];

        // If an item isn't already a favorite, create one and push it to the array; otherwise remove it from the array
        if (favorites.filter((p) => p.productID === product.id).length !== 1) {
            favorites.push({
                favoriteID: favorites.length,
                productID: product.id,
            });
        } else {
            const index = favorites.indexOf(
                favorites.filter((item) => item.productID === product.id)[0]
            );
            favorites.splice(index, 1);
        }

        // Setting the new state
        this.setState({ favorites });
    };

    render() {
        const { products, cart, favorites, categories, currency } = this.state;

        return (
            <div className="App">
                <BrowserRouter>
                    <Navbar
                        cartItemsCount={cart.items
                            .map((item) => item.quantity)
                            .reduce((prev, next) => prev + next, 0)}
                    />
                    <Content
                        products={products}
                        cart={cart}
                        favorites={favorites}
                        categories={categories}
                        currency={currency}
                        onIncrementProduct={this.handleIncrementProduct}
                        onDecrementProduct={this.handleDecrementProduct}
                        onRemoveProduct={this.handleRemoveProduct}
                        onRemoveAllProducts={this.handleRemoveAllProducts}
                        onFavorite={this.handleFavorite}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
