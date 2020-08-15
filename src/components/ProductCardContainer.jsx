import React from "react";
import ProductCard from "./ProductCard";
import RangeSlider from "./RangeSlider";

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
            <div className="product-card-container__btn-container">
                <div>
                    <p className="product-card-container__container-label">
                        Sort by:
                    </p>

                    <div className="btn btn--select product-card-container__btn">
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
                    </div>
                </div>

                <div>
                    <p className="product-card-container__container-label">
                        Filter by price span:
                    </p>
                    <div className="btn btn--slider product-card-container__btn">
                        <div className="slider-content">
                            <RangeSlider
                                onSliderChange={onSliderChange}
                                values={productsFilterSliderValues}
                                productsFilterSliderValues={
                                    productsFilterSliderValues
                                }
                                currency={currency}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-card-container__product-grid">
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
            </div>
        </div>
    );
}

export default ProductCardContainer;
