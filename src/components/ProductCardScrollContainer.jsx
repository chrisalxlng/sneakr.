import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductCardScrollContainer(props) {
    const {
        category,
        products,
        favorites,
        currency,
        onTogglePopup,
        onFavorite,
    } = props;

    return products.filter((product) => product.categories.includes(category))
        .length === 0 ? null : (
        <div className="product-card-scroll-container">
            <div className="product-card-scroll-container__label-link-container">
                <h3>{category}</h3>
                <Link to={`/${category}`}>
                    <button className="btn btn--container product-card-scroll-container product-card-scroll-container__see-all-btn">
                        See all products in {category}
                    </button>
                </Link>
            </div>

            <div className="product-card-scroll-container__scroll-grid">
                {products
                    .filter((product) => product.categories.includes(category))
                    .map((product, index) => {
                        if (index < 5) {
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