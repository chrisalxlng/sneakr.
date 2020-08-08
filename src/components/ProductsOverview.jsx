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
            onIncrementProduct: props.onIncrementProduct,
            onFavorite: props.onFavorite,
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
            onFavorite,
            onIncrementProduct,
            showPopup,
            popupProduct,
        } = this.state;

        return (
            <div>
                <h2>{categorie}</h2>
                <ProductCardContainer
                    products={products}
                    favorites={favorites}
                    currency={currency}
                    onOpenPopup={this.handleTogglePopup}
                    onFavorite={onFavorite}
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
