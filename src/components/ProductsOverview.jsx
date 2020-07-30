import React, { Component } from "react";
import ProductCardContainer from "./ProductCardContainer";
import OnBuyPopup from "./OnBuyPopup";

class ProductsOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            categorie: props.categorie,
            currency: props.currency,
            onIncrementProduct: props.onIncrementProduct,
            onFavorite: props.onFavorite,
            showPopup: false,
        };
    }

    handleOpenPopup = (product) => {
        this.setState({
            popupProduct: product,
            showPopup: !this.state.showPopup,
        });
    };

    render() {
        const {
            products,
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
                    currency={currency}
                    onOpenPopup={this.handleOpenPopup}
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
