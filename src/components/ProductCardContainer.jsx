import React, { Component } from "react";
import NoUiSlider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import ProductCard from "./ProductCard";

class ProductCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            onOpenPopup: props.onOpenPopup,
            onFavorite: props.onFavorite,
            copyOfProducts: props.products,
            sortBy: "default",
            sliderValues: [5, 100],
        };
    }

    handleSort = (sortBy, products) => {
        // Sorting by default order
        if (sortBy === "default") {
            products.sort((prev, next) => {
                if (prev.id > next.id) return 1;
                else if (prev.id < next.id) return -1;
                else return 0;
            });
        } else {
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
        }

        // Setting the new state
        this.setState({
            products: products,
            sortBy: sortBy,
        });

        return products;
    };

    handleSliderChange = (sliderValueSpan, products) => {
        // Filtering the products regarding to price span
        products = products.filter(
            (product) =>
                product.price >= sliderValueSpan[0] &&
                product.price <= sliderValueSpan[1]
        );

        // Setting the new state
        this.setState({
            products: products,
            sliderValues: sliderValueSpan,
        });

        return products;
    };

    render() {
        const {
            products,
            onOpenPopup,
            onFavorite,
            sliderValues,
            copyOfProducts,
        } = this.state;

        return (
            <div>
                <label htmlFor="sort-select">Sort by:</label>
                <select
                    onChange={(event) => {
                        let products = this.handleSort(
                            event.target.value,
                            copyOfProducts
                        );
                        this.handleSliderChange(
                            this.state.sliderValues,
                            products
                        );
                    }}
                    name="sort"
                    id="sort-select"
                    defaultValue="default"
                >
                    <option key="sort-pricing-default" value="default">
                        Our Favorites
                    </option>
                    <option key="sort-pricing-ascending" value="ascending">
                        Lowest Prices first
                    </option>
                    <option key="sort-pricing-descending" value="descending">
                        Highest Prices first
                    </option>
                    ))
                </select>

                <div className="slider">
                    <p>{Math.floor(sliderValues[0])}</p>
                    <p>{Math.floor(sliderValues[1])}</p>
                    <NoUiSlider
                        range={{ min: 5, max: 100 }}
                        start={sliderValues}
                        step={5}
                        onUpdate={(event) => {
                            let products = this.handleSort(
                                this.state.sortBy,
                                copyOfProducts
                            );
                            this.handleSliderChange(event, products);
                        }}
                        connect
                    />
                </div>

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
