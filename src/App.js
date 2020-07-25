import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import products from "./data/products.json";

class App extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            products: products,
        };
    }

    handleBuy = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...product };
        products[index].quantity++;
        this.setState({ products });
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
        const { products } = this.state;

        return (
            <div className="App">
                <Navbar
                    itemsBought={products
                        .map((item) => item.quantity)
                        .reduce((prev, next) => prev + next)}
                />
                <Content
                    products={products}
                    onBuy={this.handleBuy}
                    onFavorite={this.handleFavorite}
                />
            </div>
        );
    }
}

export default App;
