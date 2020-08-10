import React from "react";
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

function ProductCardContainer(props) {
    const {
        products,
        favorites,
        currency,
        productsSortBy,
        productsFilterSliderValues,
        onTogglePopup,
        onFavorite,
        onSort,
        onSliderChange,
    } = props;

    return (
        <div>
            <GlobalStyle />
            <Container>
                <div>
                    <UiContainerLabel>Sort by:</UiContainerLabel>

                    <Select>
                        <select
                            onChange={(event) => onSort(event.target.value)}
                            name="sort"
                            id="sort-select"
                            defaultValue={productsSortBy}
                        >
                            <option key="sort-pricing-default" value="default">
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
                    <UiContainerLabel>Filter by price span:</UiContainerLabel>
                    <Slider>
                        <span className="price-label">
                            {Math.floor(productsFilterSliderValues[0]) +
                                currency}
                        </span>
                        <NoUiSlider
                            range={{ min: 0, max: 180 }}
                            start={productsFilterSliderValues}
                            step={5}
                            onChange={(event) => onSliderChange(event)}
                            connect
                        />
                        <span className="price-label">
                            {Math.floor(productsFilterSliderValues[1]) +
                                currency}
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
                            onTogglePopup={onTogglePopup}
                            onFavorite={onFavorite}
                        />
                    );
                })}
            </ProductGrid>
        </div>
    );
}

export default ProductCardContainer;
