import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

class App extends Component {
    state = {
        products: [
            { id: 0, name: "Couch", price: "69,99€", quantity: 0 },
            { id: 1, name: "Table", price: "29,99€", quantity: 0 },
            { id: 2, name: "Chair", price: "11,99€", quantity: 0 },
        ],
    };

    handleIncrement = (product) => {
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = { ...product };
        products[index].quantity++;
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
                    onIncrement={this.handleIncrement}
                />
            </div>
        );
    }
}

export default App;
