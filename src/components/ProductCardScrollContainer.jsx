import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductCardScrollContainer(props) {
    const {
        categorie,
        products,
        favorites,
        currency,
        onTogglePopup,
        onFavorite,
    } = props;

    return (
        <div className="product-card-scroll-container">
            <Link to={`/${categorie.name}`}>
                <h3>
                    {categorie.name} ({categorie.productCount})
                </h3>
            </Link>
            <div className="product-card-scroll-container__scroll-grid">
                {products
                    .filter((product) =>
                        product.categories.includes(categorie.name)
                    )
                    .map((product, index) => {
                        if (index < 2) {
                            return (
                                <div
                                    className="product-card-scroll-container__scroll-grid-element"
                                    key={product.id}
                                >
                                    <ProductCard
                                        product={product}
                                        favorites={favorites}
                                        currency={currency}
                                        onTogglePopup={onTogglePopup}
                                        onFavorite={onFavorite}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
            </div>
        </div>
    );
}

export default ProductCardScrollContainer;
