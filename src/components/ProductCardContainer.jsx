import React, { Component } from "react";
import NoUiSlider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import ProductCard from "./ProductCard";

class ProductCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            currency: props.currency,
            onOpenPopup: props.onOpenPopup,
            onFavorite: props.onFavorite,
            copyOfProducts: props.products,
            sortBy: "default",
            sliderValues: [0, 180],
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
            sortBy: sortBy,
        });

        return products;
    };

    handleSliderChange = (sliderValueSpan, products) => {
        // Filtering the products regarding to price span
        products = products.filter(
            (product) =>
                (product.sale ? product.sale : product.price) >=
                    sliderValueSpan[0] &&
                (product.sale ? product.sale : product.price) <=
                    sliderValueSpan[1]
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
            currency,
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
                    <p>{Math.floor(sliderValues[0]) + currency}</p>
                    <p>{Math.floor(sliderValues[1]) + currency}</p>
                    <NoUiSlider
                        range={{ min: 0, max: 180 }}
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
                            currency={currency}
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
