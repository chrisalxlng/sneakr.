import React, { Component } from "react";
import ProductCardContainer from "./ProductCardContainer";
import OnBuyPopup from "./OnBuyPopup";

class ProductsOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            favorites: props.favorites,
            categorie: props.categorie,
            currency: props.currency,
            displayedProducts: props.displayedProducts,
            productsSortBy: props.productsSortBy,
            productsFilterSliderValues: props.productsFilterSliderValues,
            onIncrementProduct: props.onIncrementProduct,
            onFavorite: props.onFavorite,
            onSort: props.onSort,
            onSliderChange: props.onSliderChange,
            showPopup: false,
        };
    }

    handleTogglePopup = (product) => {
        this.setState({
            popupProduct: product,
            showPopup: !this.state.showPopup,
        });
    };

    render() {
        const {
            products,
            favorites,
            categorie,
            currency,
            displayedProducts,
            productsSortBy,
            productsFilterSliderValues,
            onFavorite,
            onIncrementProduct,
            onSort,
            onSliderChange,
            showPopup,
            popupProduct,
        } = this.state;

        return (
            <div>
                <h2>{categorie}</h2>
                <ProductCardContainer
                    products={products.filter((product) =>
                        displayedProducts.includes(product.id)
                    )}
                    favorites={favorites}
                    currency={currency}
                    productsSortBy={productsSortBy}
                    productsFilterSliderValues={productsFilterSliderValues}
                    onOpenPopup={this.handleTogglePopup}
                    onFavorite={onFavorite}
                    onSort={onSort}
                    onSliderChange={onSliderChange}
                />
                {showPopup ? (
                    <OnBuyPopup
                        product={popupProduct}
                        currency={currency}
                        onFavorite={onFavorite}
                        onIncrementProduct={onIncrementProduct}
                    />
                ) : null}
            </div>
        );
    }
}

export default ProductsOverview;
