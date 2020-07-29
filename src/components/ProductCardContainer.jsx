import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            onOpenPopup: props.onOpenPopup,
            onFavorite: props.onFavorite,
        };
    }

    handleSort = (event) => {
        // Assigning the selected value for sorting the array
        const sortBy = event.target.value;

        // Copying products from current state
        const products = [...this.state.products];

        // Declaring the sortValue
        let sortValue;

        // Defining the sortValue
        if (sortBy === "ascending") sortValue = 1;
        else if (sortBy === "descending") sortValue = -1;

        // Sorting the products array in regards to sortValue
        products.sort((prev, next) => {
            if (prev.price > next.price) return sortValue;
            else if (prev.price < next.price) return -sortValue;
            else return 0;
        });

        // Setting the new state
        this.setState({
            products: products,
        });
    };

    render() {
        const { products, onOpenPopup, onFavorite } = this.state;

        return (
            <div>
                <select
                    onChange={this.handleSort}
                    name="sort"
                    id="sort-select"
                    defaultValue="default"
                >
                    <option disabled value="default">
                        Sort by Pricing
                    </option>
                    <option key="sort-pricing-ascending" value="ascending">
                        Ascending
                    </option>
                    <option key="sort-pricing-descending" value="descending">
                        Descending
                    </option>
                    ))
                </select>
                {products.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onOpenPopup={onOpenPopup}
                            onFavorite={onFavorite}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ProductCardContainer;
