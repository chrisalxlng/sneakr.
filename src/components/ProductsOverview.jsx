import React, { Component } from "react";
import ProductCardContainer from "./ProductCardContainer";
import OnBuyPopup from "./OnBuyPopup";

class ProductsOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: props.products,
            categorie: props.categorie,
            onIncrementProduct: props.onIncrementProduct,
            onFavorite: props.onFavorite,
            product: props.products[0],
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
                    onOpenPopup={this.handleOpenPopup}
                    onFavorite={onFavorite}
                />
                {showPopup ? (
                    <OnBuyPopup
                        product={popupProduct}
                        onFavorite={onFavorite}
                        onIncrementProduct={onIncrementProduct}
                    />
                ) : null}
            </div>
        );
    }
}

export default ProductsOverview;
