import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import products from "./data/products.json";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: products,
            cart: {
                items: [],
                total: 0,
            },
            favorites: [{ favoriteID: 0, productID: 3 }],
            categories: [],
            currency: "€",
            displayedProducts: products.map((product) => product.id),
            productsSortBy: "default",
            productsFilterSliderValues: [0, 180],
            popupOnBuyProduct: { showPopup: false, product: null },
            buyProductInterface: { quantity: 1, selectedValue: null },
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
        selectedValue = product.sizes[0],
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
        cartTotal += (product.sale ? product.sale : product.price) * quantity;

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
        cartTotal -= product.sale ? product.sale : product.price;

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
        cartTotal -= (product.sale ? product.sale : product.price) * quantity;

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

    handleSort = (sortBy) => {
        // Copying products and productsSortBy from current state
        const products = [...this.state.products];
        const productsSortBy = sortBy;

        // Sorting by default order
        if (productsSortBy === "default") {
            products.sort((prev, next) => {
                if (prev.id > next.id) return 1;
                else if (prev.id < next.id) return -1;
                else return 0;
            });
        } else {
            // Declaring the sortValue
            let sortValue;

            // Defining the sortValue
            if (productsSortBy === "ascending") sortValue = 1;
            else if (productsSortBy === "descending") sortValue = -1;

            // Sorting the products array in regards to sortValue
            products.sort((prev, next) => {
                if (
                    (prev.sale ? prev.sale : prev.price) >
                    (next.sale ? next.sale : next.price)
                )
                    return sortValue;
                else if (
                    (prev.sale ? prev.sale : prev.price) <
                    (next.sale ? next.sale : next.price)
                )
                    return -sortValue;
                else return 0;
            });
        }

        // Setting the new state
        this.setState({
            products: products,
            productsSortBy: productsSortBy,
        });
    };

    handleSliderChange = (sliderValues) => {
        // Copying products and productsFilterSliderValues from current state
        let products = [...this.state.products];
        const productsFilterSliderValues = sliderValues;

        // Filtering the products regarding to price span
        const displayedProducts = products
            .filter(
                (product) =>
                    (product.sale ? product.sale : product.price) >=
                        productsFilterSliderValues[0] &&
                    (product.sale ? product.sale : product.price) <=
                        productsFilterSliderValues[1]
            )
            .map((product) => product.id);

        // Setting the new state
        this.setState({
            displayedProducts: displayedProducts,
            productsFilterSliderValues: productsFilterSliderValues,
        });
    };

    handleTogglePopup = (product = null) => {
        this.setState({
            popupOnBuyProduct: {
                showPopup: !this.state.popupOnBuyProduct.showPopup,
                product: product,
            },
        });
    };

    handleInterfaceIncrementQuantity = () => {
        // Copying buyProductInterface from current state
        const buyProductInterface = { ...this.state.buyProductInterface };

        // Increment quantity
        buyProductInterface.quantity++;

        // Setting the new state
        this.setState({ buyProductInterface: buyProductInterface });
    };

    handleInterfaceDecrementQuantity = () => {
        // Copying buyProductInterface from current state
        const buyProductInterface = { ...this.state.buyProductInterface };

        // If quantity > 1, decrement quantity
        if (buyProductInterface.quantity > 1) buyProductInterface.quantity--;

        // Setting the new state
        this.setState({ buyProductInterface: buyProductInterface });
    };

    handleInterfaceReset = () => {
        // Copying buyProductInterface from current state
        const buyProductInterface = { ...this.state.buyProductInterface };

        // Resetting values of buyProductInterface
        buyProductInterface.quantity = 1;
        buyProductInterface.selectedValue = null;

        // Setting the new state
        this.setState({ buyProductInterface: buyProductInterface });
    };

    handleInterfaceSelectChange = (value) => {
        // Copying buyProductInterface from current state
        const buyProductInterface = { ...this.state.buyProductInterface };

        // Setting selectValue to the changed value
        buyProductInterface.selectedValue = value;

        // Setting the state with the new selected value
        this.setState({ buyProductInterface: buyProductInterface });
    };

    render() {
        const {
            products,
            cart,
            favorites,
            categories,
            currency,
            displayedProducts,
            productsSortBy,
            productsFilterSliderValues,
            popupOnBuyProduct,
            buyProductInterface,
        } = this.state;

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
                        displayedProducts={displayedProducts}
                        productsSortBy={productsSortBy}
                        productsFilterSliderValues={productsFilterSliderValues}
                        popupOnBuyProduct={popupOnBuyProduct}
                        buyProductInterface={buyProductInterface}
                        onIncrementProduct={this.handleIncrementProduct}
                        onDecrementProduct={this.handleDecrementProduct}
                        onRemoveProduct={this.handleRemoveProduct}
                        onRemoveAllProducts={this.handleRemoveAllProducts}
                        onFavorite={this.handleFavorite}
                        onSort={this.handleSort}
                        onSliderChange={this.handleSliderChange}
                        onTogglePopup={this.handleTogglePopup}
                        onInterfaceIncrementQuantity={
                            this.handleInterfaceIncrementQuantity
                        }
                        onInterfaceDecrementQuantity={
                            this.handleInterfaceDecrementQuantity
                        }
                        onInterfaceReset={this.handleInterfaceReset}
                        onInterfaceSelectChange={
                            this.handleInterfaceSelectChange
                        }
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
