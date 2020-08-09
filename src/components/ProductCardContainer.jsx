import React, { Component } from "react";
import styled from "styled-components";
import NoUiSlider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import ProductCard from "./ProductCard";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UiContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    height: 40px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Select = styled(UiContainer)`
    margin-right: 20px;
    width: min-content;
    position: relative;
    overflow: hidden;

    select  {
        appearance: none;
        border: none;
        padding: 10px 40px 10px 20px;
        cursor: pointer;
    }

    img {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
        width: 25px;
        pointer-events: none;
    }
`;

const Slider = styled(UiContainer)`
    width: 100%;
    padding: 10px 20px;

    .price-label {
        font-size: 12px;
    }

    .noUi-horizontal {
        margin: 0 10px;
        height: 5px;
        width: 100%;
    }

    .noUi-target {
        background: #efa7a7;
        border-radius: 50px;
        border: none;
        box-shadow: none;
    }

    .noUi-connect {
        background: red;
    }

    .noUi-horizontal .noUi-handle {
        border-radius: 50%;
        border: none;
        box-shadow: none;
        cursor: pointer;
        background-color: red;
        height: 10px;
        width: 10px;
        top: -3px;
        right: -5px;

        :before,
        :after {
            content: "";
            display: none;
        }
    }
`;

const SliderWrapper = styled.div`
    width: 300px;
`;

const UiContainerLabel = styled.p`
    padding-bottom: 5px;
`;

const ProductGrid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 230px);
    grid-gap: 20px;
    justify-content: space-between;
`;

class ProductCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            favorites: props.favorites,
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
            favorites,
            currency,
            onOpenPopup,
            onFavorite,
            sliderValues,
            copyOfProducts,
        } = this.state;

        return (
            <div>
                <GlobalStyle />
                <Container>
                    <div>
                        <UiContainerLabel>Sort by:</UiContainerLabel>

                        <Select>
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
                                <option
                                    key="sort-pricing-default"
                                    value="default"
                                >
                                    Our Favorites
                                </option>
                                <option
                                    key="sort-pricing-ascending"
                                    value="ascending"
                                >
                                    Lowest Prices first
                                </option>
                                <option
                                    key="sort-pricing-descending"
                                    value="descending"
                                >
                                    Highest Prices first
                                </option>
                                ))
                            </select>
                            <img src="/icons/down-arrow.svg" alt="" />
                        </Select>
                    </div>

                    <SliderWrapper>
                        <UiContainerLabel>
                            Filter by price span:
                        </UiContainerLabel>
                        <Slider>
                            <span className="price-label">
                                {Math.floor(sliderValues[0]) + currency}
                            </span>
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
                            <span className="price-label">
                                {Math.floor(sliderValues[1]) + currency}
                            </span>
                        </Slider>
                    </SliderWrapper>
                </Container>

                <ProductGrid>
                    {products.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                product={item}
                                favorites={favorites}
                                currency={currency}
                                onOpenPopup={onOpenPopup}
                                onFavorite={onFavorite}
                            />
                        );
                    })}
                </ProductGrid>
            </div>
        );
    }
}

export default ProductCardContainer;
